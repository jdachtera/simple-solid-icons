import fs from 'fs/promises'
import path from 'path'
import {
  iconSetConfigs,
  SetOrVariant,
  variantSets,
} from '../../iconSets.config'

import { fileURLToPath } from 'url'
import { useTemplate } from './useTemplate'
import { generateCompiledIconJsx } from './generateCompiledIconJsx'

import * as babel from '@babel/core'
import { initializeSetFiles } from './initializeSetFiles'
import { readSvgSourceFiles } from './readSvgSourceFiles'
import { updatePackageJsonExports } from './updatePackageJsonExports'
import { generateIndexFiles } from './generateIndexFiles'

const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

export const outRoot = path.resolve(path.join(__dirname, '../../src'))

export async function generateIcons(): Promise<void> {
  console.log('Generating icons from .icon-cache...')
  let iconCount = 0

  await fs.writeFile(`${outRoot}/types.ts`, await useTemplate('types.d.ts'))
  const iconsWithImportPath = await Promise.all(
    variantSets.map(async set => {
      const {
        outFileJsDom,
        outFileJsSsr,
        outFileDts,
        iconsJsHeader,
        baseFileName,
      } = await initializeSetFiles(set, outRoot)

      let jsxCode = iconsJsHeader

      const svgFiles = await readSvgSourceFiles(set)

      svgFiles.sort()

      const iconstWithImport = {
        componentNames: [] as string[],
        set: set.name,
        variant: 'variant' in set ? set.variant : undefined,
        importPath: baseFileName,
      }

      for (const svgPath of svgFiles) {
        try {
          const { dts, jsx, componentName } = await generateCompiledIconJsx(
            set,
            svgPath
          )

          jsxCode += jsx
          await fs.appendFile(outFileDts, dts)

          iconstWithImport.componentNames.push(componentName)

          iconCount++
        } catch (error) {
          console.error(
            `Error processing ${svgPath} in set ${set.name}:`,
            error
          )
        }
      }

      const jsCode = await babel.transformAsync(jsxCode, {
        filename: outFileJsSsr,
        sourceMaps: 'inline',
        minified: false,
        compact: false,
        presets: [
          [
            'solid',
            { generate: 'dom', hydratable: true, sourceMaps: 'inline' },
          ],
        ],
      })!

      const jsSsrCode = await babel.transformAsync(jsxCode, {
        filename: outFileJsSsr,
        sourceMaps: 'inline',
        minified: false,
        compact: false,
        presets: [
          ['solid', { generate: 'ssr', hydratable: true, sourceMap: 'inline' }],
        ],
      })

      await fs.writeFile(outFileJsDom, jsCode?.code!)
      await fs.writeFile(outFileJsSsr, jsSsrCode?.code!)
      console.log(
        `✓ ${svgFiles.length} icons generated from ${'variant' in set ? `${set.name}:${set.variant} variant` : `${set.name} set`}`
      )

      return iconstWithImport
    })
  )

  iconsWithImportPath.sort((a, b) => {
    if (a.set !== b.set) return a.set.localeCompare(b.set)
    if (a.variant !== b.variant) return (a.variant || '').localeCompare(b.variant || '')
    return a.importPath.localeCompare(b.importPath)
  })

  await updatePackageJsonExports()
  await generateIndexFiles(iconsWithImportPath)
}
