import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Piapro</title>",
  _tmpl$2 = "<path d=\"M11.988 0c-4.705 0-8.7 3.492-9.351 8.168-.06.207-.09.444-.09.68V24l5.21-3.403V9.44c0-2.338 1.893-4.261 4.231-4.261s4.261 1.894 4.261 4.232c0 2.337-1.894 4.261-4.231 4.261-.77 0-1.54-.207-2.22-.621v5.563A9.45 9.45 0 0 0 21.191 11.6C22.405 6.51 19.268 1.45 14.207.266A9.48 9.48 0 0 0 11.988 0Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePiapro(props) {
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