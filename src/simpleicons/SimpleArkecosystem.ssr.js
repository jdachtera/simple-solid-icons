import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>ARK Ecosystem</title>",
  _tmpl$2 = "<path d=\"M1.8 0C.806 0 0 .805 0 1.8v20.4c0 .995.805 1.8 1.8 1.8h20.4c.995 0 1.8-.805 1.8-1.8V1.8c0-.995-.805-1.8-1.8-1.8H1.8zm10.223 4.39l9.29 15.098-9.29-9.82-9.351 9.82 9.351-15.097zm0 7.583l1.633 1.691h-3.285l1.652-1.691zM9.31 14.762h5.41l1.496 1.574H7.813l1.496-1.574z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleArkecosystem(props) {
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