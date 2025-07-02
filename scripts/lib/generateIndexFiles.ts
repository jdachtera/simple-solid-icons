import fs from 'fs/promises'
import path from 'path'
import { outRoot } from './generateIcons'

export async function generateIndexFiles(
  iconsWithImportPath: {
    componentNames: string[]
    set: string
    variant?: string
    importPath: string
  }[]
) {
  const indexContent = iconsWithImportPath
    .map(
      ({ componentNames, importPath }) =>
        `export {\n  ${componentNames.join(', \n  ')}\n} from './${importPath}';`
    )
    .join('\n')
  await fs.writeFile(`${outRoot}/index.js`, indexContent + '\n')
  await fs.writeFile(`${outRoot}/index.ssr.js`, indexContent + '\n')

  const indexDtsContent = iconsWithImportPath
    .map(
      ({ componentNames, importPath }) =>
        `export type {\n  ${componentNames.join(', \n  ')}\n} from './${importPath}';`
    )
    .join('\n')

  await fs.writeFile(`${outRoot}/index.d.ts`, indexDtsContent + '\n')

  const iconsWithImportPathGroupedBySetName = iconsWithImportPath.reduce(
    (acc, icon) => {
      if (!acc[icon.set]) {
        acc[icon.set] = []
      }
      acc[icon.set].push(icon)
      return acc
    },
    {} as Record<string, typeof iconsWithImportPath>
  )

  Object.entries(iconsWithImportPathGroupedBySetName).forEach(
    ([setName, icons]) => {
      if (icons.length < 2) return
      const setIndexContent = icons
        .map(
          ({ componentNames, importPath }) =>
            `export {\n  ${componentNames.join(', \n  ')}\n} from './${importPath.split('/').slice(1).join('/')}';`
        )
        .join('\n')

      fs.writeFile(
        path.join(outRoot, `${setName.toLowerCase()}/index.js`),
        setIndexContent + '\n'
      )
      fs.writeFile(
        path.join(outRoot, `${setName.toLowerCase()}/index.ssr.js`),
        setIndexContent + '\n'
      )

      const setIndexDtdContent = icons
        .map(
          ({ componentNames, importPath }) =>
            `export type {\n  ${componentNames.join(', \n  ')}\n} from './${importPath.split('/').slice(1).join('/')}';`
        )
        .join('\n')

      fs.writeFile(
        path.join(outRoot, `${setName.toLowerCase()}/index.d.ts`),
        setIndexDtdContent + '\n'
      )
    }
  )

  const demoAppIndexContent = `// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.

export type IconIndexEntry = {
  set: string;
  name: string;
  variant: string;
  importPath: string;
};

export const iconIndex: IconIndexEntry[] = [
  ${iconsWithImportPath
    .flatMap(({ set, variant, componentNames, importPath }) =>
      componentNames.map(
        name =>
          `  { set: '${set}', name: '${name}', variant: '${variant || ''}', importPath: '${importPath}' },`
      )
    )
    .join('\n')}
]`

  await fs.writeFile(
    path.join(outRoot, '../demo/iconIndex.ts'),
    demoAppIndexContent + '\n'
  )
  console.log('✓ demo/iconIndex.ts generated (sorted)')
}
