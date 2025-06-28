import fs from 'fs/promises'
import { glob } from 'glob'
import path from 'path'

async function transformTsxToSSR(tsxContent: string, filename: string): Promise<string> {
  // Extract component name from filename
  const componentName = path.basename(filename, '.tsx')
  
  // Extract SVG content from the TSX file
  const svgMatch = tsxContent.match(/<svg[^>]*>[\s\S]*?<\/svg>/)
  if (!svgMatch) {
    throw new Error(`No SVG found in ${filename}`)
  }
  
  let svgContent = svgMatch[0]
  
  // Clean up JSX-specific syntax that shouldn't be in the final HTML
  svgContent = svgContent
    .replace(/\{\.\.\.rest\}/g, '{...props}') // Replace rest with props
    .replace(/\{\.\.\.props\}/g, '{...props}') // Ensure consistency
  
  // Create a simple JSX component that works with SolidJS
  const jsCode = `// Auto-generated SSR component for ${componentName}
import { mergeProps } from "solid-js";

export function ${componentName}(inputProps) {
  const props = mergeProps(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24", 
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    inputProps
  );
  
  return ${svgContent.replace(/\{\.\.\.props\}/g, '{...props}')};
}
`

  return jsCode
}

async function buildSSRComponents() {
  console.log('Building SSR-compatible components...')
  
  const srcDir = path.resolve('src/generated')
  const distDir = path.resolve('dist/generated')
  
  // Find all TSX files
  const tsxFiles = await glob('**/*.tsx', { cwd: srcDir })
  
  for (const tsxFile of tsxFiles) {
    const srcPath = path.join(srcDir, tsxFile)
    const content = await fs.readFile(srcPath, 'utf-8')
    
    // Extract component name from filename
    const componentName = path.basename(tsxFile, '.tsx')
    
    try {
      // Transform TSX to SSR-compatible JS using Babel + SolidJS preset
      const jsContent = await transformTsxToSSR(content, srcPath)
      
      // Write to dist directory as .jsx since it contains JSX
      const distPath = path.join(distDir, tsxFile.replace('.tsx', '.jsx'))
      await fs.mkdir(path.dirname(distPath), { recursive: true })
      await fs.writeFile(distPath, jsContent)
      
      console.log(`✓ Transformed ${tsxFile}`)
    } catch (error) {
      console.error(`✗ Failed to transform ${tsxFile}:`, error.message)
    }
  }
  
  // Build index files for each icon set (dynamically detect which ones exist)
  const iconSetDirs = await fs.readdir(srcDir)
  const iconSets: string[] = []
  
  for (const dir of iconSetDirs) {
    const dirPath = path.join(srcDir, dir)
    const stat = await fs.stat(dirPath)
    if (stat.isDirectory()) {
      iconSets.push(dir)
    }
  }
  
  for (const iconSet of iconSets) {
    const iconSetDir = path.join(distDir, iconSet)
    const iconFiles = await glob('*.jsx', { cwd: iconSetDir })
    
    // Create index file that exports all icons
    const exports = iconFiles
      .map(file => {
        const componentName = path.basename(file, '.jsx')
        return `export { ${componentName} } from './${componentName}.jsx'`
      })
      .join('\n')
    
    const indexPath = path.join(iconSetDir, 'index.js')
    await fs.writeFile(indexPath, exports)
    console.log(`✓ Created ${iconSet}/index.js`)
  }
  
  // Create main index file
  const mainIndexContent = iconSets
    .map(set => `export * from './generated/${set}/index.js'`)
    .join('\n')
  
  await fs.writeFile(path.join(distDir, '../index.js'), mainIndexContent)
  console.log('✓ Created main index.js')
  
  console.log('SSR build complete!')
}

buildSSRComponents().catch(console.error)
