import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Ethers</title>",
  _tmpl$2 = "<path d=\"M24 17.443c-12.547 1.64-21.503 3.61-21.636-4.474 0 0 .274-3.133 4.116-3.33 0 0 .13-2.782 3.065-3.097 1.578-.171 3.37 1.454 3.565 3.165 0 0 3.883-.719 4.051 3.067.059 1.32-.238 3.563-3.983 3.465 0 0-2.167-.294-2.461-3.644-.61 6.485 8.767 6.108 8.902.218.06-2.547-1.572-5.167-5.246-4.676-2.014-5.066-7.375-4.775-9.37-.076-2.854 0-5.035 2.196-5.003 5.064.11 9.23 12.954 6.447 24 4.318Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleEthers(props) {
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