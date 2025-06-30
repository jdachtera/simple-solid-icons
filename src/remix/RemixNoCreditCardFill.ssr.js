import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M19.5859 21L21.1925 22.6067L22.6068 21.1925L2.80777 1.39348L1.39355 2.80769L2.11974 3.53387C2.04627 3.67306 2.00468 3.83167 2.00468 4V7H5.58586L9.58586 11H2.00468V20C2.00468 20.5523 2.4524 21 3.00468 21H19.5859ZM22.0047 11V17.7622L15.2425 11H22.0047ZM22.0047 7H11.2425L7.24251 3H21.0047C21.557 3 22.0047 3.44771 22.0047 4V7Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixNoCreditCardFill(props) {
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