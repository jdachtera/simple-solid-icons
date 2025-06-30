// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';

export function FaChessBoard(props) {
  const merged = mergeProps(
    {
      size: 32,
      color: 'currentColor',
      fill: 'currentColor',
      stroke: 'none',
      'stroke-width': 2,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 448 512',
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
      <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 64l0 64 64 0 0-64 64 0 0 64 64 0 0-64 64 0 0 64-64 0 0 64 64 0 0 64-64 0 0 64 64 0 0 64-64 0 0-64-64 0 0 64-64 0 0-64-64 0 0 64-64 0 0-64 64 0 0-64-64 0 0-64 64 0 0-64-64 0 0-64 64 0zm64 128l64 0 0-64-64 0 0 64zm0 64l0-64-64 0 0 64 64 0zm64 0l-64 0 0 64 64 0 0-64zm0 0l64 0 0-64-64 0 0 64z" />
    </svg>
  );
}
