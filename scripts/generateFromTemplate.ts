import fs from 'fs/promises'
import path from 'path'
import { glob } from 'glob'
import { fileURLToPath } from 'url'
import { iconSetConfigs } from '../iconSets.config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const templatesDir = path.resolve(__dirname)
const jsxTemplatePath = path.join(templatesDir, 'iconTemplate.jsx')
const dtsTemplatePath = path.join(templatesDir, 'iconTemplate.d.ts')
const packageJsonPath = path.resolve(__dirname, '../package.json')

type IconSetConfig = (typeof iconSetConfigs)[number]

type ExportsField = {
  [key: string]: {
    import: string
    types: string
  }
}

async function updatePackageJsonExports(iconSetNames: string[]) {
  const pkgRaw = await fs.readFile(packageJsonPath, 'utf-8')
  const pkg = JSON.parse(pkgRaw)
  const newExports: ExportsField = {
    '.': {
      import: './src/index.js',
      types: './src/index.d.ts',
    },
  }
  // Track root and variant exports
  const rootExports: Record<string, boolean> = {}
  for (const setName of iconSetNames) {
    if (setName.includes('/')) {
      const [root, variant] = setName.split('/')
      newExports[`./${root}/${variant}`] = {
        import: `./src/${root}/${variant}/index.js`,
        types: `./src/${root}/${variant}/index.d.ts`,
      }
      rootExports[root] = true
    } else {
      newExports[`./${setName}`] = {
        import: `./src/${setName}/index.js`,
        types: `./src/${setName}/index.d.ts`,
      }
    }
  }
  // Add root exports for multi-variant sets
  for (const root of Object.keys(rootExports)) {
    newExports[`./${root}`] = {
      import: `./src/${root}/index.js`,
      types: `./src/${root}/index.d.ts`,
    }
  }
  pkg.exports = newExports
  await fs.writeFile(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n')
  console.log('✓ package.json exports updated')
}

function camelize(str: string): string {
  return str
    .replace(/(^|[-_\s]+)([a-zA-Z0-9])/g, (_: string, __: string, c: string) =>
      c.toUpperCase()
    )
    .replace(/[^a-zA-Z0-9]/g, '')
}

function extractStyle(svg: string): { style: string; svg: string } {
  let style = ''
  let out = svg
  // Extract <style>...</style> blocks
  out = out.replace(/<style[\s\S]*?<\/style>/gi, match => {
    style += match.replace(/<\/?style>/g, '')
    return ''
  })
  return { style: style.trim(), svg: out }
}

function stripStyleAndClass(svg: string): string {
  // Remove XML declaration
  let out = svg.replace(/<\?xml[\s\S]*?\?>/gi, '')
  // Remove class and className attributes
  out = out.replace(/\s(class|className)="[^"]*"/gi, '')
  // Remove HTML comments
  out = out.replace(/<!--([\s\S]*?)-->/g, '')
  // Remove nested <svg> tags, keep only inner content
  const svgMatch = out.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i)
  if (svgMatch) {
    out = svgMatch[1]
  }
  return out
}

async function generateIcons(): Promise<void> {
  const outRoot = path.resolve('src')
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
        const svgDir = path.resolve(__dirname, set.cacheDir)
        const svgFiles: string[] = await glob(variant.svgGlob, { cwd: svgDir })
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
        for (const svgFile of svgFiles) {
          const svgPath = path.join(svgDir, svgFile)
          let svgContent = await fs.readFile(svgPath, 'utf-8')
          // Extract style and clean SVG
          const { style, svg: svgNoStyle } = extractStyle(svgContent)
          const cleanedSvg = stripStyleAndClass(svgNoStyle)
          const baseName = path.basename(svgFile, '.svg')
          const componentName =
            camelize((variant ? variant.componentPrefix : (set as any).componentPrefix) + baseName)
          const jsxDistPath = path.join(outDir, `${componentName}.jsx`)
          // JSX
          let jsxCode = jsxTemplate
            .replace('ICON_SET_NAME', set.name)
            .replace('ICON_SET_LICENSE', set.license)
            .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
            .replace('ICON_NAME', componentName)
            .replace('SVG_PATHS', cleanedSvg)
          if (style) {
            jsxCode = jsxCode.replace(
              '/*__ICON_STYLE__*/',
              `<style>{
\`${style}\`
}</style>`
            )
          } else {
            jsxCode = jsxCode.replace('/*__ICON_STYLE__*/', '')
          }
          await fs.writeFile(jsxDistPath, jsxCode)
          // DTS
          const dtsCode = dtsTemplate
            .replace('ICON_SET_NAME', set.name)
            .replace('ICON_SET_LICENSE', set.license)
            .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
            .replace('ICON_NAME', componentName)
          const dtsDistPath = path.join(outDir, `${componentName}.d.ts`)
          await fs.writeFile(dtsDistPath, dtsCode)
          iconCount++
          console.log(`✓ ${set.name}/${variant.variant}/${componentName}`)
          // Save the componentName for index export
          generatedComponentNames.push(componentName)
        }
        // Index for this set/variant
        const exports = generatedComponentNames
          .map(componentName => `export { ${componentName} } from './${componentName}.jsx'`)
          .join('\n')
        const indexPath = path.join(outDir, 'index.js')
        await fs.writeFile(indexPath, exports)
        // Types index
        await fs.writeFile(path.join(outDir, 'index.d.ts'), exports)
        console.log(`✓ ${set.name}/${variant.variant}/index.js`)
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
      const svgDir = path.resolve(__dirname, set.cacheDir)
      const svgFiles: string[] = await glob((set as any).svgGlob, {
        cwd: svgDir,
      })
      if (!svgFiles.length) {
        missingSets.push(set.name)
        continue
      }
      iconSetNames.push(set.name)
      const outDir = path.join(outRoot, set.name)
      await fs.mkdir(outDir, { recursive: true })
      let generatedComponentNames: string[] = []
      for (const svgFile of svgFiles) {
        const svgPath = path.join(svgDir, svgFile)
        let svgContent = await fs.readFile(svgPath, 'utf-8')
        // Extract style and clean SVG
        const { style, svg: svgNoStyle } = extractStyle(svgContent)
        const cleanedSvg = stripStyleAndClass(svgNoStyle)
        const baseName = path.basename(svgFile, '.svg')
        const componentName =
          camelize((set as any).componentPrefix) + camelize(baseName)
        const jsxDistPath = path.join(outDir, `${componentName}.jsx`)
        // JSX
        let jsxCode = jsxTemplate
          .replace('ICON_SET_NAME', set.name)
          .replace('ICON_SET_LICENSE', set.license)
          .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
          .replace('ICON_NAME', componentName)
          .replace('SVG_PATHS', cleanedSvg)
        if (style) {
          jsxCode = jsxCode.replace(
            '/*__ICON_STYLE__*/',
            `<style>{
\`${style}\`
}</style>`
          )
        } else {
          jsxCode = jsxCode.replace('/*__ICON_STYLE__*/', '')
        }
        await fs.writeFile(jsxDistPath, jsxCode)
        // DTS
        const dtsCode = dtsTemplate
          .replace('ICON_SET_NAME', set.name)
          .replace('ICON_SET_LICENSE', set.license)
          .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
          .replace('ICON_NAME', componentName)
        const dtsDistPath = path.join(outDir, `${componentName}.d.ts`)
        await fs.writeFile(dtsDistPath, dtsCode)
        iconCount++
        console.log(`✓ ${set.name}/${componentName}`)
        // Save the componentName for index export
        generatedComponentNames.push(componentName)
      }
      // Index for this set
      const exports = generatedComponentNames
        .map(componentName => `export { ${componentName} } from './${componentName}.jsx'`)
        .join('\n')
      const indexPath = path.join(outDir, 'index.js')
      await fs.writeFile(indexPath, exports)
      // Types index
      await fs.writeFile(path.join(outDir, 'index.d.ts'), exports)
      console.log(`✓ ${set.name}/index.js`)
    }
  }
  // Main index.js
  const mainIndexContent = iconSetNames
    .map(set => {
      if (set.includes('/')) {
        const [setName, variant] = set.split('/')
        return `export * from './${setName}/${variant}/index.js'`
      }
      return `export * from './${set}/index.js'`
    })
    .join('\n')
  await fs.writeFile(path.join(outRoot, 'index.js'), mainIndexContent)
  // Main index.d.ts
  await fs.writeFile(path.join(outRoot, 'index.d.ts'), mainIndexContent)
  console.log('✓ main index.js and index.d.ts')
  console.log(
    `Generated ${iconCount} icons in ${iconSetNames.length} sets/variants.`
  )
  if (missingSets.length) {
    console.warn(`Warning: No SVGs found for sets: ${missingSets.join(', ')}`)
  }
  await updatePackageJsonExports(iconSetNames)
}

generateIcons().catch(console.error)
