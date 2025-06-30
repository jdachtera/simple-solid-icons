// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js'

export function BoxBxScatterChart(props) {
  const merged = mergeProps(
    {
      size: 32,
      color: 'currentColor',
      fill: 'currentColor',
      stroke: 'none',
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
      <path d="M4 21h17v-2H5V3H3v17a1 1 0 0 0 1 1z"/><circle cx="10" cy="8" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="11.5" cy="13.5" r="1.5"/><circle cx="16.5" cy="6.5" r="1.5"/>
    </svg>
  )
}
