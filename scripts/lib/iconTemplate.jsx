// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ICON_SET_NAME | License: ICON_SET_LICENSE (<ICON_SET_LICENSE_URL>)
import { mergeProps } from 'solid-js'

export function ICON_NAME(props) {
  const merged = mergeProps(
    {
      size: __DEFAULT_SIZE__,
      color: __DEFAULT_COLOR__,
      fill: __DEFAULT_FILL__,
      stroke: __DEFAULT_STROKE__,
      'stroke-width': __DEFAULT_STROKE_WIDTH__,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: 'VIEW_BOX',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    props
  )
  return (
    <svg
      {...merged}
      width={merged.width ?? merged.size}
      height={merged.height ?? merged.size}
      stroke={merged.stroke ?? merged.color}
      fill={merged.fill}
    >
      SVG_PATHS
    </svg>
  )
}
