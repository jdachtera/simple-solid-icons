// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js'

export function LucideGlasses({ size = 24, width, height, ...inputProps }) {
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
  return <svg {...props}>
  <circle cx="6" cy="15" r="4" />
  <circle cx="18" cy="15" r="4" />
  <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
  <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
  <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
</svg>
}
