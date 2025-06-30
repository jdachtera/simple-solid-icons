import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>KTM</title>",
  _tmpl$2 = "<path d=\"M0 15.735h3.354l.843-2.06 1.55 2.06h7.225l2.234-2.081-.372 2.081h2.83L20 13.675l-.32 2.06h3.052L24 9.99h-3.068l-2.486 2.191.48-2.19h-2.942l-3.209 3.216 1.342-3.938h4.907l.225-1.003H6.381l-.378 1.003h4.732l-1.994 5.054-1.572-2.066L9.886 9.99H7.612l-2.787 2.23.938-2.23H2.44L0 15.735Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleKtm(props) {
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