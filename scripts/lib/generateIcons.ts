import fs from 'fs/promises'
import { glob } from 'glob'
import path from 'path'
import { getSetDefaultProps, iconSetConfigs } from '../../iconSets.config'
import { camelize } from './camelize'
import prettier from 'prettier'

import { stripStyleAndClass } from './stripStyleAndClass'
import { updatePackageJsonExports } from './updatePackageJsonExports'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const templatesDir = path.resolve(__dirname)
const jsxTemplatePath = path.join(templatesDir, 'iconTemplate.jsx')
const dtsTemplatePath = path.join(templatesDir, 'iconTemplate.d.ts')

export async function generateIcons(): Promise<void> {
  const outRoot = path.resolve(path.join(__dirname, '../../src'))
  const jsxTemplate = await fs.readFile(jsxTemplatePath, 'utf-8')
  const dtsTemplate = await fs.readFile(dtsTemplatePath, 'utf-8')
  console.log('Generating icons from .icon-cache...')
  let iconCount = 0
  const iconSetNames: string[] = []
  const missingSets: string[] = []
  const multiVariantRoots: Record<string, string[]> = {}

  for (const set of iconSetConfigs) {
    // Multi-variant support
    if (Array.isArray((set as any).variants)) {
      const root = set.name
      multiVariantRoots[root] = []
      for (const variant of (set as any).variants) {
        let svgFiles: string[] = []
        let svgDir = ''
        if (set.sourceType === 'npm') {
          // svgGlob is absolute or relative to project root (node_modules/...)
          svgFiles = await glob(variant.svgGlob, { absolute: true })
        } else {
          svgDir = path.resolve(__dirname, '../../', set.cacheDir)
          svgFiles = await glob(variant.svgGlob, { cwd: svgDir })
        }
        if (!svgFiles.length) {
          missingSets.push(`${set.name}/${variant.variant}`)
          continue
        }
        const variantName = camelize(variant.variant)
        iconSetNames.push(`${set.name}/${variantName}`)
        multiVariantRoots[root].push(variantName)
        const outDir = path.join(outRoot, set.name, variantName)
        await fs.mkdir(outDir, { recursive: true })
        let generatedComponentNames: string[] = []
        await Promise.all(svgFiles.map(async (svgFile) => {
          const svgPath = set.sourceType === 'npm' ? svgFile : path.join(svgDir, svgFile)
          let svgContent = await fs.readFile(svgPath, 'utf-8')
          // Clean SVG and extract viewBox
          let svgNoStyle = svgContent
          let viewBox = '0 0 24 24'
          const viewBoxMatch = svgNoStyle.match(/viewBox="([^"]+)"/i)
          if (viewBoxMatch) {
            viewBox = viewBoxMatch[1]
          }
          const cleanedSvg = stripStyleAndClass(
            svgNoStyle,
            variant.removeClasses || set.removeClasses || []
          )
          const baseName = path.basename(svgFile, '.svg')
          const componentName = camelize(
            (variant ? variant.componentPrefix : (set as any).componentPrefix) +
              baseName
          )
          const jsxDistPath = path.join(outDir, `${componentName}.jsx`)
          // JSX
          const defaultProps = getSetDefaultProps(variant)
          let jsxCode = jsxTemplate
            .replace('ICON_SET_NAME', set.name)
            .replace('ICON_SET_LICENSE', set.license)
            .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
            .replace('ICON_NAME', componentName)
            .replace('SVG_PATHS', cleanedSvg)
            .replace('VIEW_BOX', viewBox)
            .replace('__DEFAULT_SIZE__', `${defaultProps.size}`)
            .replace(
              '__DEFAULT_COLOR__',
              `'${defaultProps.color}'`
            )
            .replace(
              '__DEFAULT_FILL__',
              `'${defaultProps.fill}'`
            )
            .replace(
              '__DEFAULT_STROKE__',
              `'${defaultProps.stroke}'`
            )
            .replace(
              '__DEFAULT_STROKE_WIDTH__',
              `${defaultProps['stroke-width']}`
            )
            .replace('/*__ICON_STYLE__*/', '')

          const formattedJsx = await prettier.format(jsxCode, {
            parser: 'babel',
            singleQuote: true,
            trailingComma: 'all',
            printWidth: 80,
            tabWidth: 2,
          })
          await fs.writeFile(jsxDistPath, formattedJsx)
          // DTS
          const dtsCode = dtsTemplate
            .replace('ICON_SET_NAME', set.name)
            .replace('ICON_SET_LICENSE', set.license)
            .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
            .replace('ICON_NAME', componentName)
          const dtsDistPath = path.join(outDir, `${componentName}.d.ts`)
          await fs.writeFile(dtsDistPath, dtsCode)
          iconCount++
          // (logging removed for speed)
          // Save the componentName for index export
          generatedComponentNames.push(componentName)
        }))
        // Index for this set/variant (sorted)
        generatedComponentNames.sort((a, b) => a.localeCompare(b))
        const exports = generatedComponentNames
          .map(
            componentName =>
              `export { ${componentName} } from './${componentName}.jsx'`
          )
          .join('\n')
        const indexPath = path.join(outDir, 'index.js')
        await fs.writeFile(indexPath, exports)
        // Types index
        await fs.writeFile(path.join(outDir, 'index.d.ts'), exports)
        console.log(`✓ ${set.name}/${variant.variant}/index.js (sorted)`)
      }
      // Root index for multi-variant set
      if (multiVariantRoots[root].length) {
        const rootIndexContent = multiVariantRoots[root]
          .map(v => `export * from './${v}/index.js'`)
          .join('\n')
        const rootIndexPath = path.join(outRoot, root, 'index.js')
        await fs.writeFile(rootIndexPath, rootIndexContent)
        await fs.writeFile(
          path.join(outRoot, root, 'index.d.ts'),
          rootIndexContent
        )
        console.log(`✓ ${root}/index.js (root re-export)`)
      }
    } else {
      // Single-variant (default) sets
      let svgFiles: string[] = []
      let svgDir = ''
      const globPattern = set.svgGlob || '**/*.svg'
      if (set.sourceType === 'npm') {
        svgFiles = await glob(globPattern, { absolute: true })
      } else {
        svgDir = path.resolve(__dirname, '../../', set.cacheDir)
        svgFiles = await glob(globPattern, { cwd: svgDir })
      }
      if (!svgFiles.length) {
        missingSets.push(set.name)
        continue
      }
      iconSetNames.push(set.name)
      const outDir = path.join(outRoot, set.name)
      await fs.mkdir(outDir, { recursive: true })
      let generatedComponentNames: string[] = []
      for (const svgFile of svgFiles) {
        const svgPath = set.sourceType === 'npm' ? svgFile : path.join(svgDir, svgFile)
        let svgContent = await fs.readFile(svgPath, 'utf-8')
        // Clean SVG and extract viewBox
        let svgNoStyle = svgContent
        let viewBox = '0 0 24 24'
        const viewBoxMatch = svgNoStyle.match(/viewBox="([^"]+)"/i)
        if (viewBoxMatch) {
          viewBox = viewBoxMatch[1]
        }
        const cleanedSvg = stripStyleAndClass(
          svgNoStyle,
          set.removeClasses || []
        )
        const baseName = path.basename(svgFile, '.svg')
        const componentName =
          camelize((set as any).componentPrefix) + camelize(baseName)
        const jsxDistPath = path.join(outDir, `${componentName}.jsx`)
        // JSX
        const defaultProps = getSetDefaultProps(set)
        const jsxCode = jsxTemplate
          .replace('ICON_SET_NAME', set.name)
          .replace('ICON_SET_LICENSE', set.license)
          .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
          .replace('ICON_NAME', componentName)
          .replace('SVG_PATHS', cleanedSvg)
          .replace('VIEW_BOX', viewBox)
          .replace('__DEFAULT_SIZE__', `${defaultProps.size ?? 24}`)
          .replace(
            '__DEFAULT_COLOR__',
            `'${defaultProps.color ?? 'currentColor'}'`
          )
          .replace(
            '__DEFAULT_FILL__',
            defaultProps.fill !== undefined
              ? `'${defaultProps.fill}'`
              : 'undefined'
          )
          .replace(
            '__DEFAULT_STROKE__',
            defaultProps.stroke !== undefined
              ? `'${defaultProps.stroke}'`
              : 'undefined'
          )
          .replace(
            '__DEFAULT_STROKE_WIDTH__',
            `${defaultProps['stroke-width'] ?? 2}`
          )
          .replace('/*__ICON_STYLE__*/', '')

        const formattedJsx = await prettier.format(jsxCode, {
          parser: 'babel',
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 80,
          tabWidth: 2,
        })
        await fs.writeFile(jsxDistPath, formattedJsx)

        // DTS
        const dtsCode = dtsTemplate
          .replace('ICON_SET_NAME', set.name)
          .replace('ICON_SET_LICENSE', set.license)
          .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
          .replace('ICON_NAME', componentName)
        const dtsDistPath = path.join(outDir, `${componentName}.d.ts`)
        await fs.writeFile(dtsDistPath, dtsCode)
        iconCount++
        // (logging removed for speed)
        // Save the componentName for index export
        generatedComponentNames.push(componentName)
      }
      // Index for this set (sorted)
      generatedComponentNames.sort((a, b) => a.localeCompare(b))
      const exports = generatedComponentNames
        .map(
          componentName =>
            `export { ${componentName} } from './${componentName}.jsx'`
        )
        .join('\n')
      const indexPath = path.join(outDir, 'index.js')
      await fs.writeFile(indexPath, exports)
      // Types index
      await fs.writeFile(path.join(outDir, 'index.d.ts'), exports)
      console.log(`✓ ${set.name}/index.js (sorted)`)
    }
  }
  // (No main index.js or index.d.ts generated)
  // console.log('✓ main index.js and index.d.ts')
  console.log(
    `Generated ${iconCount} icons in ${iconSetNames.length} sets/variants.`
  )
  if (missingSets.length) {
    console.warn(`Warning: No SVGs found for sets: ${missingSets.join(', ')}`)
  }
  await updatePackageJsonExports(iconSetNames)
}
