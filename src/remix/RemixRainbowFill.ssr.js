import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12 4C18.0751 4 23 8.92487 23 15V20H20V15C20 10.6651 16.5522 7.13546 12.2492 7.00381L12 7C7.66509 7 4.13546 10.4478 4.00381 14.7508L4 15V20H1V15C1 8.92487 5.92487 4 12 4ZM12 8C15.866 8 19 11.134 19 15V20H16V15C16 12.8578 14.316 11.1089 12.1996 11.0049L12 11C9.8578 11 8.10892 12.684 8.0049 14.8004L8 15V20H5V15C5 11.134 8.13401 8 12 8ZM12 12C13.6569 12 15 13.3431 15 15V20H9V15C9 13.3431 10.3431 12 12 12Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixRainbowFill(props) {
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