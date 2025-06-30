import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 368l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm32-144c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26 15.5-48.4 37.8-58.4c-3.7 5.2-5.8 11.6-5.8 18.4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4C208.5 175.6 224 198 224 224zm128 64c-35.3 0-64-28.7-64-64c0-26 15.5-48.4 37.8-58.4c-3.7 5.2-5.8 11.6-5.8 18.4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4C400.5 175.6 416 198 416 224c0 35.3-28.7 64-64 64z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidFaceRollingEyes(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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