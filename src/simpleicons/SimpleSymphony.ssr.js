import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Symphony</title>",
  _tmpl$2 = "<path d=\"M20.471 8.118v-4.22c0-.864-.468-1.677-1.22-2.12C18.124 1.113 15.684 0 12 0S5.876 1.113 4.75 1.777a2.476 2.476 0 0 0-1.22 2.12v6.338l13.412 3.882v2.824c0 .382-.24.65-.648.849L12 19.941l-4.315-2.162c-.386-.188-.626-.456-.626-.838v-2.118L3.53 13.764v3.177c0 1.744 1 3.228 2.588 4.001L12 24l5.86-3.047c1.61-.784 2.61-2.268 2.61-4.011v-5.294L7.059 7.765V4.542C8.017 4.08 9.651 3.529 12 3.529c2.349 0 3.983.55 4.941 1.013v2.517l3.53 1.059z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSymphony(props) {
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