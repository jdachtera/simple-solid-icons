import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M241.8 111.9c8.9 9.9 8.1 25-1.8 33.9l-80 72c-9.1 8.2-23 8.2-32.1 0l-80-72c-9.9-8.9-10.7-24-1.8-33.9s24-10.7 33.9-1.8l39.9 36L120 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 122.1 39.9-36c9.9-8.9 25-8.1 33.9 1.8zm122.8 22.6c11.5-8.7 27.3-8.7 38.8 0l168 128c6.6 5 11 12.5 12.3 20.7l24 160 .7 4.7c17.5 .2 31.6 14.4 31.6 32c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l127.6 0 .7-4.7 24-160c1.2-8.2 5.6-15.7 12.3-20.7l168-128zM384 448l80 0L402.7 325.5c-1.7-3.4-5.1-5.5-8.8-5.5c-5.5 0-9.9 4.4-9.9 9.9L384 448z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidTentArrowDownToLine(props) {
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