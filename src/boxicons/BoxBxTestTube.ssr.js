import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m13.293 2.707.818.818L3.318 14.318C2.468 15.168 2 16.298 2 17.5s.468 2.332 1.318 3.183C4.169 21.532 5.299 22 6.5 22s2.331-.468 3.182-1.318L20.475 9.889l.818.818 1.414-1.414-8-8-1.414 1.414zm3.182 8.354-2.403-2.404-1.414 1.414 2.403 2.404-1.414 1.415-.99-.99-1.414 1.414.99.99-1.415 1.415-2.403-2.404L7 15.728l2.403 2.404-1.136 1.136c-.945.944-2.59.944-3.535 0C4.26 18.795 4 18.168 4 17.5s.26-1.295.732-1.768L15.525 4.939l3.535 3.535-2.585 2.587z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxTestTube(props) {
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
  }), () => _$ssr(_tmpl$), true);
}