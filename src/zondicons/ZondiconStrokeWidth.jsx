// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: zondicons | License: MIT (<https://github.com/dukestreetstudio/zondicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js'

export function ZondiconStrokeWidth({ size = 24, width, height, ...inputProps }) {
  const props = mergeProps(
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: width ?? size,
      height: height ?? size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    inputProps
  )
  return <svg {...props}><path d="M0 0h20v5H0V0zm0 7h20v4H0V7zm0 6h20v3H0v-3zm0 5h20v2H0v-2z"/></svg>
}
