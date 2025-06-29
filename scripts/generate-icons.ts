import fs from 'fs/promises'
import path from 'path'
import prettier from 'prettier'

// Configuration for icon sources
const ICON_SOURCES = [
  {
    name: 'tabler',
    repo: 'tabler/tabler-icons',
    path: 'icons/outline',
    prefix: 'Tabler',
    branch: 'main',
  },
  {
    name: 'heroicons',
    repo: 'tailwindlabs/heroicons',
    path: 'src/24/outline',
    prefix: 'Hero',
    branch: 'master',
  },
  {
    name: 'lucide',
    repo: 'lucide-icons/lucide',
    path: 'icons',
    prefix: 'Lucide',
    branch: 'main',
  },
]

// Map icon sources to local cache paths
const ICON_CACHE_PATHS = {
  tabler: 'icons/outline',
  heroicons: 'src/24/outline',
  lucide: 'icons',
}

type IconSource = (typeof ICON_SOURCES)[0]

async function formatCode(
  code: string,
  parser: 'typescript' | 'tsx' = 'typescript'
): Promise<string> {
  try {
    return await prettier.format(code, {
      parser,
      semi: false,
      singleQuote: true,
      trailingComma: 'es5',
      tabWidth: 2,
      printWidth: 80,
      bracketSpacing: true,
      arrowParens: 'avoid',
    })
  } catch (error) {
    console.warn('⚠️  Prettier formatting failed for code snippet:', error)
    return code
  }
}

function pascalCase(str: string): string {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\s/g, '')
}

function sanitizeSvg(svgContent: string): string {
  // Remove XML declaration and comments
  return svgContent
    .replace(/<\?xml[^>]*>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim()
}

function parseAttributes(attributeString: string): Record<string, string> {
  const attributes: Record<string, string> = {}
  const attrRegex = /(\w+(?:-\w+)*)="([^"]*)"/g
  let match

  while ((match = attrRegex.exec(attributeString)) !== null) {
    const [, name, value] = match
    attributes[name] = value
  }

  return attributes
}

function generateComponent(
  iconName: string,
  svgContent: string,
  prefix: string
): string {
  const componentName = `${prefix}${pascalCase(iconName)}`
  const sanitizedSvg = sanitizeSvg(svgContent)

  // Extract SVG attributes and children
  const svgMatch = sanitizedSvg.match(/<svg([^>]*)>([\s\S]*)<\/svg>/)
  if (!svgMatch) {
    throw new Error(`Invalid SVG format for ${iconName}`)
  }

  const [, svgAttributesString, svgChildren] = svgMatch

  // Parse existing attributes
  const existingAttributes = parseAttributes(svgAttributesString)

  // Define attributes that we want to preserve from the original SVG
  const preserveAttributes = ['viewBox', 'xmlns']

  // Start with preserved attributes
  const finalAttributes: Record<string, string> = {}
  for (const attr of preserveAttributes) {
    if (existingAttributes[attr]) {
      finalAttributes[attr] = existingAttributes[attr]
    }
  }

  // Add our default attributes (these will not override preserved ones)
  const defaultAttributes: Record<string, string> = {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  }

  // Only add default attributes if they don't exist
  for (const [key, value] of Object.entries(defaultAttributes)) {
    if (!finalAttributes[key]) {
      finalAttributes[key] = value
    }
  }

  // Convert attributes to JSX format (keep kebab-case for SVG attributes in SolidJS)
  const attributeEntries = Object.entries(finalAttributes)
    .filter(([key]) => key !== 'xmlns') // xmlns will be added separately
    .map(([key, value]) => `${key}="${value}"`)

  const attributeString =
    attributeEntries.length > 0 ? ' ' + attributeEntries.join(' ') : ''

  // Clean up SVG children to remove duplicate attributes
  const cleanChildren = svgChildren
    .replace(/\s*stroke="[^"]*"/g, '') // Remove stroke attributes from children
    .replace(/\s*stroke-width="[^"]*"/g, '') // Remove stroke-width attributes from children
    .replace(/\s*stroke-linecap="[^"]*"/g, '') // Remove stroke-linecap attributes from children
    .replace(/\s*stroke-linejoin="[^"]*"/g, '') // Remove stroke-linejoin attributes from children
    .replace(/\s*fill="[^"]*"/g, '') // Remove fill attributes from children to use the parent's
    .trim()

  // Generate the component code (SSR-safe functional component)
  const componentCode = `import type { ComponentProps } from 'solid-js'
import { splitProps } from 'solid-js'

export function ${componentName}(props: ComponentProps<'svg'>) {
  const [, rest] = splitProps(props, [])
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24"${attributeString}
      {...rest}
    >
      ${cleanChildren}
    </svg>
  )
}
`

  return componentCode
}

async function generateIconsForSource(source: IconSource): Promise<void> {
  console.log(`🔄 Generating icons for ${source.name}...`)

  // Create directories
  const sourceDir = path.join('src', 'generated', source.name)
  await fs.mkdir(sourceDir, { recursive: true })

  // Read SVG files from local cache
  const cacheDir = path.resolve(
    __dirname,
    '../.icon-cache',
    source.name,
    ICON_CACHE_PATHS[source.name]
  )
  const files = (await fs.readdir(cacheDir)).filter(f => f.endsWith('.svg'))

  console.log(`📦 Found ${files.length} SVG files in cache`)

  const exports: string[] = []
  let processedCount = 0

  for (const file of files) {
    try {
      const iconName = path.basename(file, '.svg')
      const componentName = `${source.prefix}${pascalCase(iconName)}`
      const svgContent = await fs.readFile(path.join(cacheDir, file), 'utf-8')
      const componentCode = generateComponent(
        iconName,
        svgContent,
        source.prefix
      )
      const formattedCode = await formatCode(componentCode, 'typescript')
      const componentPath = path.join(sourceDir, `${componentName}.tsx`)
      await fs.writeFile(componentPath, formattedCode)
      exports.push(`export { ${componentName} } from './${componentName}'`)
      processedCount++
      if (processedCount % 50 === 0) {
        console.log(`  ✅ Processed ${processedCount}/${files.length} icons`)
      }
    } catch (error) {
      console.error(`❌ Failed to process ${file}:`, error)
    }
  }

  // Generate index file
  const indexContent = exports.sort().join('\n') + '\n'
  await fs.writeFile(path.join(sourceDir, 'index.ts'), indexContent)
  console.log(`✅ Generated ${processedCount} icons for ${source.name}`)
}

async function generateMainIndex(): Promise<void> {
  const exports = ICON_SOURCES.map(
    source => `export * from './generated/${source.name}'`
  ).join('\n')

  const indexContent = `// Auto-generated icon exports
// This file is generated by scripts/generate-icons.ts

${exports}
`

  await fs.writeFile(path.join('src', 'index.ts'), indexContent)
}

async function main(): Promise<void> {
  console.log('🚀 Starting icon generation...')

  // Clean and create directories
  await fs.rm('src', { recursive: true, force: true })
  await fs.mkdir('src/generated', { recursive: true })

  // Generate icons for each source
  for (const source of ICON_SOURCES) {
    await generateIconsForSource(source)
  }

  // Generate main index
  await generateMainIndex()

  console.log('🎉 Icon generation complete!')
}

main().catch(console.error)
