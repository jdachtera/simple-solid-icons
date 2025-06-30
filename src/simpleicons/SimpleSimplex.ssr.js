import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>SimpleX</title>",
  _tmpl$2 = "<path d=\"m16.1 0-4.026 4.025L8.125.076 6.113 2.09l3.95 3.947-3.975 3.977L2.14 6.066.109 8.096l3.948 3.947L0 16.1l1.975 1.972 4.056-4.056 3.95 3.947 2.029-2.027-3.95-3.95 3.975-3.972 3.951 3.949-4.025 4.023v.002L9.947 18l-4.023 4.025L7.896 24l4.026-4.025 3.95 3.949 2.013-2.014-3.951-3.95 4.027-4.024 3.95 3.949 2.013-2.012-3.95-3.95L24 7.899l-1.975-1.972L18 9.949 14.049 6l4.025-4.025z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSimplex(props) {
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