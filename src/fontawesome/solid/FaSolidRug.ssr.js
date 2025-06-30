import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M24 64l32 0 24 0 0 24 0 88 0 80 0 80 0 88 0 24-24 0-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-40-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-32-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-32-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-40-8 0C10.7 112 0 101.3 0 88S10.7 64 24 64zm88 0l416 0 0 384-416 0 0-384zM640 88c0 13.3-10.7 24-24 24l-8 0 0 40 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 32 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 32 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 40 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0-24 0 0-24 0-88 0-80 0-80 0-88 0-24 24 0 32 0c13.3 0 24 10.7 24 24z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidRug(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 640 512',
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