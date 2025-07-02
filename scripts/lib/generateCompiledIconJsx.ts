import fs from 'fs/promises'
import { SetOrVariant } from '../../iconSets.config'

import { stripStyleAndClass } from './stripStyleAndClass'
import { useTemplate } from './useTemplate'
import { camelize } from './camelize'
import path from 'path'

export const generateCompiledIconJsx = async (
  set: SetOrVariant,
  svgPath: string
) => {
  const componentName = set.componentPrefix
    ? `${set.componentPrefix}${camelize(
        path.basename(svgPath, path.extname(svgPath))
      )}`
    : camelize(path.basename(svgPath, path.extname(svgPath)))

  let svgContent = await fs.readFile(svgPath, 'utf-8')
  // Clean SVG and extract viewBox
  let svgNoStyle = svgContent
  let viewBox = '0 0 24 24'
  const viewBoxMatch = svgNoStyle.match(/viewBox="([^"]+)"/i)
  if (viewBoxMatch) {
    viewBox = viewBoxMatch[1]
  }
  const cleanedSvg = stripStyleAndClass(svgNoStyle, set.removeClasses)
  const iconSetName = 'variant' in set ? `${set.name}/${set.variant}` : set.name

  const defaultImportName =
    'variant' in set
      ? `${set.name.toLowerCase()}${camelize(set.variant.toLowerCase())}`
      : set.name.toLowerCase()

  let jsxCode = await useTemplate('icon.jsx', {
    DEFAULT_IMPORT_NAME: defaultImportName,
    ICON_SET_NAME: iconSetName,
    ICON_SET_LICENSE: set.license,
    ICON_SET_LICENSE_URL: set.licenseUrl,
    ICON_NAME: componentName,
    SVG_PATHS: cleanedSvg,
    VIEW_BOX: viewBox,
  })

  const dtsCode = await useTemplate('icon.d.ts', {
    ICON_SET_NAME: iconSetName,
    ICON_SET_LICENSE: set.license,
    ICON_SET_LICENSE_URL: set.licenseUrl,
    ICON_NAME: componentName,
    VIEW_BOX: viewBox,
  })

  return { jsx: jsxCode, dts: dtsCode,componentName }
}
