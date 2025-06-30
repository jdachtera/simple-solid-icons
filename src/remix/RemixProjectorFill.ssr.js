import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M3 3H21C21.5523 3 22 3.44772 22 4V10H18.874C18.4299 8.27477 16.8638 7 15 7C13.1362 7 11.5701 8.27477 11.126 10H2V4C2 3.44772 2.44772 3 3 3ZM2 12V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V12H18.874C18.4299 13.7252 16.8638 15 15 15C13.1362 15 11.5701 13.7252 11.126 12H2ZM15 9C13.8954 9 13 9.89543 13 11C13 12.1046 13.8954 13 15 13C16.1046 13 17 12.1046 17 11C17 9.89543 16.1046 9 15 9ZM6 15H8V17H6V15Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixProjectorFill(props) {
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