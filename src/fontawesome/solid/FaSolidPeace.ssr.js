import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M224 445.3l0-121.8-94.3 77.1c26.1 22.8 58.5 38.7 94.3 44.7zM89.2 351.1L224 240.8l0-174.2C133.2 81.9 64 160.9 64 256c0 34.6 9.2 67.1 25.2 95.1zm293.1 49.5L288 323.5l0 121.8c35.7-6 68.1-21.9 94.3-44.7zm40.6-49.5c16-28 25.2-60.5 25.2-95.1c0-95.1-69.2-174.1-160-189.3l0 174.2L422.8 351.1zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidPeace(props) {
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