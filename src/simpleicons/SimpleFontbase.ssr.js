import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>FontBase</title>",
  _tmpl$2 = "<path d=\"M23.079 13.996c-2.702-2.771-5.702-5.703-8.105-8.103-1.62-1.621-4.284-1.621-5.943 0-2.97 2.963-5.248 5.21-8.104 8.066a3.12 3.12 0 0 0 0 4.437 3.12 3.12 0 0 0 4.437 0l2.2-2.2 2.2 2.2a3.12 3.12 0 0 0 4.438 0 3.12 3.12 0 0 0 0-4.438l4.4 4.4a3.12 3.12 0 0 0 4.438 0c1.274-1.16 1.274-3.165.039-4.362z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFontbase(props) {
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