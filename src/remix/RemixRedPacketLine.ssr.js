import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M14.178 9.76602C16.0334 9.35487 17.695 8.4283 19.0049 7.14424V4.00281H5.00488V7.14424C6.31472 8.4283 7.97632 9.35487 9.83175 9.76602C10.2621 9.01149 11.0741 8.50281 12.0049 8.50281C12.9357 8.50281 13.7477 9.01149 14.178 9.76602ZM14.3861 11.7666C14.0633 12.7737 13.1192 13.5028 12.0049 13.5028C10.8905 13.5028 9.94648 12.7737 9.6237 11.7666C7.92722 11.425 6.36024 10.7257 5.00488 9.75071V20.0028H19.0049V9.75071C17.6495 10.7257 16.0825 11.425 14.3861 11.7666ZM4.00488 2.00281H20.0049C20.5572 2.00281 21.0049 2.45052 21.0049 3.00281V21.0028C21.0049 21.5551 20.5572 22.0028 20.0049 22.0028H4.00488C3.4526 22.0028 3.00488 21.5551 3.00488 21.0028V3.00281C3.00488 2.45052 3.4526 2.00281 4.00488 2.00281Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixRedPacketLine(props) {
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