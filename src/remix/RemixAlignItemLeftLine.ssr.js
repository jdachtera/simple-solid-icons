import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M3 21V3H5V21H3ZM9 15H15V18H9V15ZM8 13C7.44772 13 7 13.4477 7 14V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V14C17 13.4477 16.5523 13 16 13H8ZM9 9H19V6H9V9ZM7 5C7 4.44772 7.44772 4 8 4H20C20.5523 4 21 4.44772 21 5V10C21 10.5523 20.5523 11 20 11H8C7.44772 11 7 10.5523 7 10V5Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixAlignItemLeftLine(props) {
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