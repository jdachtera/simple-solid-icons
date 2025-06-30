// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';

export function TablerPilcrow(props) {
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
      <path d="M13 4v16" />
      <path d="M17 4v16" />
      <path d="M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5" />
    </svg>
  );
}
