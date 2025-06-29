// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js'

export function LucideSquareScissors({ size = 24, width, height, ...inputProps }) {
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
  <rect width="20" height="20" x="2" y="2" rx="2" />
  <circle cx="8" cy="8" r="2" />
  <path d="M9.414 9.414 12 12" />
  <path d="M14.8 14.8 18 18" />
  <circle cx="8" cy="16" r="2" />
  <path d="m18 6-8.586 8.586" />
</svg>
}
