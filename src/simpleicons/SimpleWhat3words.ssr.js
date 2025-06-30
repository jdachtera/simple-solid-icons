import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>what3words</title>",
  _tmpl$2 = "<path d=\"M0 0v24h24V0zm13.515 6.75a.75.75 0 0 1 .696.987l-3 9a.75.75 0 0 1-.711.513.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .727-.513zm-4.499.002a.75.75 0 0 1 .695.985l-3 9A.75.75 0 0 1 6 17.25a.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .728-.511zm9 0a.75.75 0 0 1 .695.985l-3 9a.75.75 0 0 1-.711.513.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .728-.511z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWhat3words(props) {
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