import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>iLovePDF</title>",
  _tmpl$2 = "<path d=\"M15.374 2.094c-1.347.65-2.356 1.744-3.094 2.985C11.095 3.087 9.21 1.47 6.356 1.47 3.501 1.47 0 3.894 0 7.987c0 4.145 3.458 6.109 5.171 7.218 1.831 1.185 4.955 3.339 7.11 7.325 2.154-3.986 5.278-6.14 7.109-7.325 1.287-.834 3.56-2.151 4.61-4.514Zm-.104 8.832V3.138l7.788 7.788H15.27z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleIlovepdf(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
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