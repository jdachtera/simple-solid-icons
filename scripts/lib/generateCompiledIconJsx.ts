import * as babel from '@babel/core'
import fs from 'fs/promises'
import { IconSetConfig, getSetDefaultProps } from '../../iconSets.config'
import { jsxTemplate } from './generateIcons'
import { stripStyleAndClass } from './stripStyleAndClass'

export const generateCompiledIconJsx = async (
  set: IconSetConfig,
  componentName: string,
  svgPath: string
) => {
  const defaultProps = getSetDefaultProps(set)
  let svgContent = await fs.readFile(svgPath, 'utf-8')
  // Clean SVG and extract viewBox
  let svgNoStyle = svgContent
  let viewBox = '0 0 24 24'
  const viewBoxMatch = svgNoStyle.match(/viewBox="([^"]+)"/i)
  if (viewBoxMatch) {
    viewBox = viewBoxMatch[1]
  }
  const cleanedSvg = stripStyleAndClass(svgNoStyle, set.removeClasses)
  let jsxCode = jsxTemplate
    .replace('ICON_SET_NAME', set.name)
    .replace('ICON_SET_LICENSE', set.license)
    .replace('ICON_SET_LICENSE_URL', set.licenseUrl)
    .replace('ICON_NAME', componentName)
    .replace('SVG_PATHS', cleanedSvg)
    .replace('VIEW_BOX', viewBox)
    .replace('__DEFAULT_SIZE__', `${defaultProps.size}`)
    .replace('__DEFAULT_COLOR__', `'${defaultProps.color}'`)
    .replace('__DEFAULT_FILL__', `'${defaultProps.fill}'`)
    .replace('__DEFAULT_STROKE__', `'${defaultProps.stroke}'`)
    .replace('__DEFAULT_STROKE_WIDTH__', `${defaultProps['stroke-width']}`)
    .replace('/*__ICON_STYLE__*/', '')

  const jsCode = await babel.transformAsync(jsxCode, {
    presets: [['solid', { generate: 'dom', hydratable: true }]],
  })

  const jsSsrCode = await babel.transformAsync(jsxCode, {
    presets: [['solid', { generate: 'ssr', hydratable: true }]],
  })

  return { dom: jsCode.code, ssr: jsSsrCode.code }
}
