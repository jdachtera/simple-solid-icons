import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>LibreOffice</title>",
  _tmpl$2 = "<path d=\"M16.365 0a.597.597 0 00-.555.352.582.582 0 00.128.635l4.985 4.996a.605.605 0 00.635.133.59.59 0 00.363-.53V.577A.605.605 0 0021.335 0zM2.661 0a.59.59 0 00-.582.59v22.82a.59.59 0 00.582.59h18.67a.59.59 0 00.59-.59V8.716a.59.59 0 00-.17-.42L13.674.182a.59.59 0 00-.42-.181zm.59 1.184h9.754l7.733 7.77v13.863H3.251z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLibreoffice(props) {
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