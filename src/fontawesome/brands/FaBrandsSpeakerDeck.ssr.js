import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M213.86 296H100a100 100 0 0 1 0-200h132.84a40 40 0 0 1 0 80H98c-26.47 0-26.45 40 0 40h113.82a100 100 0 0 1 0 200H40a40 40 0 0 1 0-80h173.86c26.48 0 26.46-40 0-40zM298 416a120.21 120.21 0 0 0 51.11-80h64.55a19.83 19.83 0 0 0 19.66-20V196a19.83 19.83 0 0 0-19.66-20H296.42a60.77 60.77 0 0 0 0-80h136.93c43.44 0 78.65 35.82 78.65 80v160c0 44.18-35.21 80-78.65 80z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsSpeakerDeck(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, props);
  return _$ssrElement("svg", _$mergeProps(merged, {
    get width() {
      return merged.width ?? merged.size;
    },
    get height() {
      return merged.height ?? merged.size;
    },
    get stroke() {
      return merged.stroke ?? merged.color;
    },
    get fill() {
      return merged.fill;
    }
  }), () => _$ssr(_tmpl$), true);
}