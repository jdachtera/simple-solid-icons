// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js'

export function LucideSquareScissors(props) {
  const merged = mergeProps(
    {
      size: 32,
      color: 'currentColor',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
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
      
  <rect width="20" height="20" x="2" y="2" rx="2" />
  <circle cx="8" cy="8" r="2" />
  <path d="M9.414 9.414 12 12" />
  <path d="M14.8 14.8 18 18" />
  <circle cx="8" cy="16" r="2" />
  <path d="m18 6-8.586 8.586" />

    </svg>
  )
}
