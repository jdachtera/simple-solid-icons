// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';

export function IonBan(props) {
  const merged = mergeProps(
    {
      size: 32,
      color: 'currentColor',
      fill: 'currentColor',
      stroke: 'none',
      'stroke-width': 2,
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 512 512',
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
      <circle
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="48"
        cx="256"
        cy="256"
        r="200"
      />
      <line
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="48"
        x1="114.58"
        y1="114.58"
        x2="397.42"
        y2="397.42"
      />
    </svg>
  );
}
