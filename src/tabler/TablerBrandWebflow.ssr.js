import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M17 10s-1.376 3.606 -1.5 4c-.046 -.4 -1.5 -8 -1.5 -8c-2.627 0 -3.766 1.562 -4.5 3.5c0 0 -1.843 4.593 -2 5c-.013 -.368 -.5 -4.5 -.5 -4.5c-.15 -2.371 -2.211 -3.98 -4 -3.98l2 12.98c2.745 -.013 4.72 -1.562 5.5 -3.5c0 0 1.44 -4.3 1.5 -4.5c.013 .18 1 8 1 8c2.758 0 4.694 -1.626 5.5 -3.5l3.5 -9.5c-2.732 0 -4.253 2.055 -5 4z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandWebflow(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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