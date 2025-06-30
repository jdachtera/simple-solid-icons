// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';

export function TablerParkingCircle(props) {
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
    props,
  );
  return (
    <svg
      {...merged}
      width={merged.width ?? merged.size}
      height={merged.height ?? merged.size}
      stroke={merged.stroke ?? merged.color}
      fill={merged.fill}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 16v-8h3.334c.92 0 1.666 .895 1.666 2s-.746 2 -1.666 2h-3.334" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  );
}
