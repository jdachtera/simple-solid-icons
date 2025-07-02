import {
  IconSetConfig,
  SetOrVariant,
  getSetDefaultProps,
} from '../../iconSets.config'
import { camelize } from './camelize'
import { useTemplate } from './useTemplate'

export async function generateDefaultProps(
  setConfig: SetOrVariant
): Promise<string> {
  const defaultProps = getSetDefaultProps(setConfig)

  return useTemplate('defaultProps.js', {
    ICON_SET_NAME:
      'variant' in setConfig
        ? `${setConfig.name}/${setConfig.variant}`
        : setConfig.name,
    EXPORT_NAME:
      'variant' in setConfig
        ? `${setConfig.name.toLowerCase()}${camelize(setConfig.variant.toLowerCase())}`
        : setConfig.name.toLowerCase(),
    ICON_SET_LICENSE: setConfig.license,
    ICON_SET_LICENSE_URL: setConfig.licenseUrl,
    __DEFAULT_SIZE__: defaultProps.size.toString(),
    __DEFAULT_COLOR__: `'${defaultProps.color}'`,
    __DEFAULT_FILL__: `'${defaultProps.fill}'`,
    __DEFAULT_STROKE__: `'${defaultProps.stroke}'`,
    __DEFAULT_STROKE_WIDTH__: defaultProps['stroke-width'].toString(),
  })
}
