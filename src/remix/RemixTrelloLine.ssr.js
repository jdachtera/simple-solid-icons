import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M5.00098 5V19H19.001V5H5.00098ZM5.00098 3H19.001C20.1055 3 21.001 3.89543 21.001 5V19C21.001 20.1046 20.1055 21 19.001 21H5.00098C3.89641 21 3.00098 20.1046 3.00098 19V5C3.00098 3.89543 3.89641 3 5.00098 3ZM8.00098 7H10.001C10.5533 7 11.001 7.44772 11.001 8V16C11.001 16.5523 10.5533 17 10.001 17H8.00098C7.44869 17 7.00098 16.5523 7.00098 16V8C7.00098 7.44772 7.44869 7 8.00098 7ZM14.001 7H16.001C16.5533 7 17.001 7.44772 17.001 8V12C17.001 12.5523 16.5533 13 16.001 13H14.001C13.4487 13 13.001 12.5523 13.001 12V8C13.001 7.44772 13.4487 7 14.001 7Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixTrelloLine(props) {
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