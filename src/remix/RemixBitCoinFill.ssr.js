import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M12.0049 22.0028C6.48204 22.0028 2.00488 17.5257 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028ZM11.0049 16.0028V18.0028H13.0049V16.0028H14.0049C15.3856 16.0028 16.5049 14.8835 16.5049 13.5028C16.5049 12.94 16.3189 12.4206 16.0051 12.0028C16.3189 11.585 16.5049 11.0656 16.5049 10.5028C16.5049 9.1221 15.3856 8.00281 14.0049 8.00281H13.0049V6.00281H11.0049V8.00281H8.00488V16.0028H11.0049ZM10.0049 13.0028H14.0049C14.281 13.0028 14.5049 13.2267 14.5049 13.5028C14.5049 13.7789 14.281 14.0028 14.0049 14.0028H10.0049V13.0028ZM10.0049 10.0028H14.0049C14.281 10.0028 14.5049 10.2267 14.5049 10.5028C14.5049 10.7789 14.281 11.0028 14.0049 11.0028H10.0049V10.0028Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixBitCoinFill(props) {
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