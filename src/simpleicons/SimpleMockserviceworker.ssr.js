import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Mock Service Worker</title>",
  _tmpl$2 = "<path d=\"M4.5 0A4.49 4.49 0 0 0 0 4.5v15A4.49 4.49 0 0 0 4.5 24h15a4.49 4.49 0 0 0 4.5-4.5v-15A4.49 4.49 0 0 0 19.5 0Zm1.633 4.43 11.715.013c.623.001 1.208.26 1.62.674.414.414.671 1 .67 1.623v.086l-1.224 11.799a2.31 2.31 0 0 1-.836 1.545 2.293 2.293 0 0 1-3.15-.246L4.426 8.262a2.31 2.31 0 0 1-.586-1.657A2.295 2.295 0 0 1 6.133 4.43Zm2.363 3.35 7.334 8.146.844-8.137zm1.123.501 3.244.004 2.92 3.244-.336 3.227zM4.678 9.287l3.017 3.354-.369 3.57 3.588.004 3.018 3.351-7.78-.01c-.623 0-1.208-.26-1.62-.673-.414-.414-.671-1-.67-1.623v-.086z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMockserviceworker(props) {
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