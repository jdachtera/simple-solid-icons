import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M18.0049 19.9998H6.00488V21.9998H4.00488V19.9998H3.00488C2.4526 19.9998 2.00488 19.5521 2.00488 18.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V18.9998C22.0049 19.5521 21.5572 19.9998 21.0049 19.9998H20.0049V21.9998H18.0049V19.9998ZM4.00488 17.9998H20.0049V4.99979H4.00488V17.9998ZM13.0049 13.8738V16.9998H11.0049V13.8738C9.27966 13.4297 8.00488 11.8636 8.00488 9.99979C8.00488 7.79065 9.79574 5.99979 12.0049 5.99979C14.214 5.99979 16.0049 7.79065 16.0049 9.99979C16.0049 11.8636 14.7301 13.4297 13.0049 13.8738ZM12.0049 11.9998C13.1095 11.9998 14.0049 11.1044 14.0049 9.99979C14.0049 8.89522 13.1095 7.99979 12.0049 7.99979C10.9003 7.99979 10.0049 8.89522 10.0049 9.99979C10.0049 11.1044 10.9003 11.9998 12.0049 11.9998Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixSafeLine(props) {
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