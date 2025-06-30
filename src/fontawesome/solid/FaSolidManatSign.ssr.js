import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M192 32c-17.7 0-32 14.3-32 32l0 34.7C69.2 113.9 0 192.9 0 288L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-59.6 40.8-109.8 96-124l0 284c0 17.7 14.3 32 32 32s32-14.3 32-32l0-284c55.2 14.2 96 64.3 96 124l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-95.1-69.2-174.1-160-189.3L224 64c0-17.7-14.3-32-32-32z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidManatSign(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 384 512',
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