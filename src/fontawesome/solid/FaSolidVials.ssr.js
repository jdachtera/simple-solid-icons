import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M0 64C0 46.3 14.3 32 32 32l56 0 48 0 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80L32 96C14.3 96 0 81.7 0 64zM136 96L88 96l0 160 48 0 0-160zM288 64c0-17.7 14.3-32 32-32l56 0 48 0 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-304c-17.7 0-32-14.3-32-32zM424 96l-48 0 0 160 48 0 0-160z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidVials(props) {
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