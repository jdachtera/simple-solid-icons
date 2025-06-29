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

async function generateIcons() {
  const outRoot = path.resolve('src')
  const jsxTemplate = await fs.readFile(jsxTemplatePath, 'utf-8')
  const dtsTemplate = await fs.readFile(dtsTemplatePath, 'utf-8')
  console.log('Generating icons from .icon-cache...')
  let iconCount = 0
  const iconSetNames: string[] = []

  for (const set of iconSetConfigs) {
    const svgDir = path.resolve(__dirname, set.cacheDir)
    const svgFiles = await glob(set.svgGlob, { cwd: svgDir })
    if (!svgFiles.length) continue
    iconSetNames.push(set.name)
    const outDir = path.join(outRoot, set.name)
    await fs.mkdir(outDir, { recursive: true })
    for (const svgFile of svgFiles) {
      const svgPath = path.join(svgDir, svgFile)
      const svgContent = await fs.readFile(svgPath, 'utf-8')
      const baseName = path.basename(svgFile, '.svg')
      const componentName =
        set.componentPrefix +
        baseName
          .replace(/(^|-|_)([a-z])/g, (_, __, c) => c.toUpperCase())
          .replace(/[^a-zA-Z0-9]/g, '')
      const svgMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/)
      if (!svgMatch) continue
      const svgPaths = svgMatch[1]
      // JSX
      const jsxCode = jsxTemplate
        .replace('ICON_SET_NAME', set.name)
        .replace('ICON_SET_LICENSE', set.license)
        .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
        .replace(/ICON_NAME/g, componentName)
        .replace('SVG_PATHS', svgPaths)
      const jsxDistPath = path.join(outDir, `${componentName}.jsx`)
      await fs.writeFile(jsxDistPath, jsxCode)
      // DTS
      const dtsCode = dtsTemplate
        .replace('ICON_SET_NAME', set.name)
        .replace('ICON_SET_LICENSE', set.license)
        .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
        .replace(/ICON_NAME/g, componentName)
      const dtsDistPath = path.join(outDir, `${componentName}.d.ts`)
      await fs.writeFile(dtsDistPath, dtsCode)
      iconCount++
      console.log(`✓ ${set.name}/${componentName}`)
    }
    // Index for this set
    const iconFiles = await glob('*.jsx', { cwd: outDir })
    const exports = iconFiles
      .map(file => {
        const componentName = path.basename(file, '.jsx')
        return `export { ${componentName} } from './${componentName}.jsx'`
      })
      .join('\n')
    const indexPath = path.join(outDir, 'index.js')
    await fs.writeFile(indexPath, exports)
    console.log(`✓ ${set.name}/index.js`)
  }
  // Main index.js
  const mainIndexContent = iconSetNames
    .map(set => `export * from './${set}/index.js'`)
    .join('\n')
  await fs.writeFile(path.join(outRoot, 'index.js'), mainIndexContent)
  // Main index.d.ts
  const mainIndexTypes = iconSetNames
    .map(set => `export * from './${set}/index.js'`)
    .join('\n')
  await fs.writeFile(path.join(outRoot, 'index.d.ts'), mainIndexTypes)
  console.log('✓ main index.js and index.d.ts')
  console.log(`Generated ${iconCount} icons in ${iconSetNames.length} sets.`)
}

generateIcons().catch(console.error)
