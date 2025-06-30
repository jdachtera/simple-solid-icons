// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';

export function CodiconGraphScatter(props) {
  const merged = mergeProps(
    {
      size: 32,
      color: 'currentColor',
      fill: 'currentColor',
      stroke: 'none',
      'stroke-width': 2,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
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
      <path d="M15 13V14H1.5L1 13.5V0H2V13H15Z" />
      <rect x="5" y="2" width="2" height="2" />
      <rect x="12" y="1" width="2" height="2" />
      <rect x="8" y="5" width="2" height="2" />
      <rect x="5" y="9" width="2" height="2" />
      <rect x="12" y="8" width="2" height="2" />
    </svg>
  );
}
