import fs from 'fs/promises'
import path, { dirname } from 'path'
import { SetOrVariant } from '../../iconSets.config'
import { camelize } from './camelize'
import { generateDefaultProps } from './generateDefaultProps'
import { useTemplate } from './useTemplate'

export const initializeSetFiles = async (
  set: SetOrVariant,
  outRoot: string
) => {
  const defaultImportName =
    'variant' in set
      ? `${set.name.toLowerCase()}${camelize(set.variant.toLowerCase())}`
      : set.name.toLowerCase()

  const baseFileName =
    'variant' in set
      ? `${set.name.toLowerCase()}/${set.variant.toLowerCase()}`
      : set.name.toLowerCase()

  const outFileJsDom = path.join(outRoot, `${baseFileName}.js`)
  const outFileJsSsr = path.join(outRoot, `${baseFileName}.ssr.js`)

  const outFileDts = path.join(outRoot, `${baseFileName}.d.ts`)

  const outDir = dirname(path.join(outRoot, baseFileName))
  const outFileDefaultPropsJs = path.join(
    outDir,
    `${defaultImportName}DefaultProps.js`
  )
  await fs.mkdir(outDir, { recursive: true })

  await fs.writeFile(
    outFileDts,
    await useTemplate('iconTypesHeader.d.ts', {
      ICON_SET_NAME: 'variant' in set ? `${set.name}/${set.variant}` : set.name,
      ICON_SET_LICENSE: set.license,
      ICON_SET_LICENSE_URL: set.licenseUrl,
      __ROOT__: 'variant' in set ? `../` : './',
    })
  )

  await fs.writeFile(outFileDefaultPropsJs, await generateDefaultProps(set))

  const iconsJsHeader = await useTemplate('iconsHeader.jsx', {
    ICON_SET_NAME: 'variant' in set ? `${set.name}/${set.variant}` : set.name,
    DEFAULT_IMPORT_NAME: defaultImportName,
    ICON_SET_LICENSE: set.license,
    ICON_SET_LICENSE_URL: set.licenseUrl,
  })

  return {
    outFileJsDom,
    outFileJsSsr,
    outFileDefaultPropsJs,
    iconsJsHeader,
    outFileDts,
    baseFileName,
  }
}
