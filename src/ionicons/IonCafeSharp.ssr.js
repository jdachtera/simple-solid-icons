import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M448,64H80V318.34a19.83,19.83,0,0,0,5.86,14.14l29.65,29.66A19.87,19.87,0,0,0,129.66,368H334.34a19.87,19.87,0,0,0,14.15-5.86l29.65-29.66A19.83,19.83,0,0,0,384,318.34V192h32a16,16,0,0,0,11.31-4.69l32-32A16,16,0,0,0,464,144V80A16,16,0,0,0,448,64Zm-16,73.37L409.37,160H384V96h48Z\"></path>",
  _tmpl$2 = "<rect x=\"48\" y=\"400\" width=\"368\" height=\"32\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCafeSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}