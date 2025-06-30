import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12 1L15 6H13V13.381L16 11.882L15.999 11H15V7H19V11H17.999L18 13.118L13 15.618L13.0009 17.171C14.1656 17.5831 15 18.6941 15 20C15 21.6569 13.6569 23 12 23C10.3431 23 9 21.6569 9 20C9 18.813 9.68934 17.7871 10.6895 17.3006L6 14L5.99892 11.7318C5.40172 11.3858 5 10.7398 5 10C5 8.89543 5.89543 8 7 8C8.10457 8 9 8.89543 9 10C9 10.7403 8.59783 11.3866 8.00007 11.7324L8 13L11 15.086V6H9L12 1ZM12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixUsbLine(props) {
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