import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M4 3H1V5H3V19H1V21H4C4.55228 21 5 20.5523 5 20V4C5 3.44772 4.55228 3 4 3ZM7 4C7 3.44772 7.44772 3 8 3H16C16.5523 3 17 3.44772 17 4V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V4ZM9 5V19H15V5H9ZM19 4C19 3.44772 19.4477 3 20 3H23V5H21V19H23V21H20C19.4477 21 19 20.5523 19 20V4Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCarouselView(props) {
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