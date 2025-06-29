// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js'

export function BoxBxLoaderCircle({ size = 24, width, height, ...inputProps }) {
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
  return <svg {...props}><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="6.343" cy="17.657" r="2"/><circle cx="17.657" cy="6.343" r="2"/><circle cx="4" cy="12" r="2.001"/><circle cx="20" cy="12" r="2"/><circle cx="6.343" cy="6.344" r="2"/><circle cx="17.657" cy="17.658" r="2"/></svg>
}
