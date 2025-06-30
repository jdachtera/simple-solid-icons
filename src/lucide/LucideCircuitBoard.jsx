// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';

export function LucideCircuitBoard(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  );
}
