import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M20.792 6.996l-3.775 2.643a2.005 2.005 0 0 1 -1.147 .361h-1.87m-4 0h-1.87c-.41 0 -.81 -.126 -1.146 -.362l-3.774 -2.641\"></path>",
  _tmpl$3 = "<path d=\"M8 10v11\"></path>",
  _tmpl$4 = "<path d=\"M16 10v2m0 4v5\"></path>",
  _tmpl$5 = "<path d=\"M20.972 16.968a2.01 2.01 0 0 0 .028 -.337v-9.262c0 -.655 -.318 -1.268 -.853 -1.643l-3.367 -2.363a2 2 0 0 0 -1.147 -.363h-7.266a1.99 1.99 0 0 0 -1.066 .309m-2.345 1.643l-1.103 .774a2.006 2.006 0 0 0 -.853 1.644v9.261c0 .655 .318 1.269 .853 1.644l3.367 2.363a2 2 0 0 0 1.147 .362h7.265c.41 0 .811 -.126 1.147 -.363l2.26 -1.587\"></path>",
  _tmpl$6 = "<path d=\"M3 3l18 18\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerHexagonalPrismOff(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6)], true);
}