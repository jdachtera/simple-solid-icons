import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12 18.1778L7.38083 16.9222L7.0517 13.3778H9.32156L9.48045 15.2222L12 15.8889L14.5195 15.2222L14.7806 12.3556H6.96091L6.32535 5.67778H17.6747L17.4477 7.88889H8.82219L9.02648 10.1444H17.2434L16.6192 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2ZM5.18844 4L6.48986 18.4339L12 19.9278L17.5101 18.4339L18.8116 4H5.18844Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixHtml5Line(props) {
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