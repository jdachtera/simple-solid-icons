import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>LVGL</title>",
  _tmpl$2 = "<path d=\"M9.23 16.615h5.54c.51 0 .922.412.922.923v5.539a.921.921 0 0 1-.923.923H9.231a.921.921 0 0 1-.923-.923v-5.539c0-.511.411-.923.923-.923zM0 17.538c0-.51.413-.923.923-.923h5.539c.51 0 .923.413.923.923v5.539c0 .51-.414.923-.923.923H2.769A2.77 2.77 0 0 1 0 21.23zm.923-9.23h5.539c.511 0 .923.411.923.922v5.539a.921.921 0 0 1-.923.923H.923A.921.921 0 0 1 0 14.769V9.23c0-.511.412-.923.923-.923zM2.77 0A2.77 2.77 0 0 0 0 2.769V6.46c0 .51.413.923.923.923h5.539c1.02 0 1.846.827 1.846 1.846v5.539c0 .51.413.923.923.923h5.538c1.02 0 1.847.826 1.847 1.846v5.539c0 .51.413.923.923.923h3.692A2.77 2.77 0 0 0 24 21.23V2.77a2.77 2.77 0 0 0-2.77-2.77zm18 1.846a1.385 1.385 0 1 1 0 2.769 1.385 1.385 0 0 1 0-2.77z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLvgl(props) {
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