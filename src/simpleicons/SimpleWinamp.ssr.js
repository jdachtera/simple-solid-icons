import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Winamp</title>",
  _tmpl$2 = "<path d=\"M11.902 0a.987.987 0 0 0-.91.604l-6.139 14.57c-.176.42.131.883.586.883H8.66a.987.987 0 0 0 .91-.604L15.707.883A.636.636 0 0 0 15.12 0h-3.219Zm3.438 7.943a.987.987 0 0 0-.91.604l-6.137 14.57c-.177.42.13.883.586.883h3.219a.987.987 0 0 0 .91-.604l6.138-14.57a.636.636 0 0 0-.586-.883h-3.22Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWinamp(props) {
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