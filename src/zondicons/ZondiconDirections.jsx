// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: zondicons | License: MIT (<https://github.com/dukestreetstudio/zondicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';

export function ZondiconDirections(props) {
  const merged = mergeProps(
    {
      size: 32,
      color: 'currentColor',
      fill: 'currentColor',
      stroke: 'none',
      'stroke-width': 2,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
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
      <path d="M10 0l10 10-10 10L0 10 10 0zM6 10v3h2v-3h3v3l4-4-4-4v3H8a2 2 0 0 0-2 2z" />
    </svg>
  );
}
