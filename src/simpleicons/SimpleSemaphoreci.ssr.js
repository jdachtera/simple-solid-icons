import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Semaphore CI</title>",
  _tmpl$2 = "<path d=\"m21.50314 13.2549-4.15781-4.22828a3.03814 3.03814 0 0 0-4.3591 0L9.6943 12.374a1.20701 1.20701 0 0 1-1.7213 0l-1.63096-1.6587 4.1578-4.22866a6.53247 6.53247 0 0 1 9.34234 0L24 10.71531zM8.82879 19.47925a6.52947 6.52947 0 0 1-4.67098-1.9657L0 13.295l2.48674-2.52872 4.15744 4.21816a3.05613 3.05613 0 0 0 4.3591 0l3.29191-3.34814a1.20701 1.20701 0 0 1 1.7213 0l1.63097 1.6587-4.14732 4.22866a6.5186 6.5186 0 0 1-4.67135 1.95558z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSemaphoreci(props) {
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