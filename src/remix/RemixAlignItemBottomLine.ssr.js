import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M9 5L9 15H6L6 5L9 5ZM5 3C4.44772 3 4 3.44772 4 4L4 16C4 16.5523 4.44772 17 5 17H10C10.5523 17 11 16.5523 11 16L11 4C11 3.44772 10.5523 3 10 3H5ZM15 9V15H18V9H15ZM13 8C13 7.44772 13.4477 7 14 7L19 7C19.5523 7 20 7.44772 20 8V16C20 16.5523 19.5523 17 19 17H14C13.4477 17 13 16.5523 13 16V8ZM21 19L3 19V21H21V19Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixAlignItemBottomLine(props) {
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