// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';

export function TablerTooltip(props) {
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
      <path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M12 13l-1.707 -1.707a1 1 0 0 0 -.707 -.293h-2.586a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2.586a1 1 0 0 0 -.707 .293l-1.707 1.707z" />
    </svg>
  );
}
