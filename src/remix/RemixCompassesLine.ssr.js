import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M10.9998 4.12272V1.9967H12.9998V4.12272C14.725 4.56676 15.9998 6.13286 15.9998 7.9967C15.9998 9.11439 15.5414 10.125 14.8023 10.8508L20.8658 21.3531L19.1338 22.3531L13.0708 11.8517C12.7299 11.9462 12.3708 11.9967 11.9998 11.9967C11.6289 11.9967 11.2697 11.9462 10.9288 11.8517L4.86584 22.3531L3.13379 21.3531L9.1973 10.8508C8.45823 10.125 7.99981 9.11439 7.99981 7.9967C7.99981 6.13286 9.27459 4.56676 10.9998 4.12272ZM11.9998 9.9967C13.1044 9.9967 13.9998 9.10127 13.9998 7.9967C13.9998 6.89213 13.1044 5.9967 11.9998 5.9967C10.8952 5.9967 9.99981 6.89213 9.99981 7.9967C9.99981 9.10127 10.8952 9.9967 11.9998 9.9967Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCompassesLine(props) {
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