import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M14.7665 19.5091C17.8219 18.3834 20.001 15.4462 20.001 12C20.001 8.55381 17.8219 5.61656 14.7665 4.4909C16.7122 5.97596 18.001 8.93354 18.001 12C18.001 15.0665 16.7122 18.024 14.7665 19.5091ZM9.23543 4.4909C6.18001 5.61656 4.00098 8.55381 4.00098 12C4.00098 15.4462 6.18001 18.3834 9.23543 19.5091C7.28979 18.024 6.00098 15.0665 6.00098 12C6.00098 8.93354 7.28979 5.97596 9.23543 4.4909ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM12.001 18.5C14.001 18.5 16.001 15.4667 16.001 12C16.001 8.53333 14.001 5.5 12.001 5.5C10.001 5.5 8.00098 8.53333 8.00098 12C8.00098 15.4667 10.001 18.5 12.001 18.5Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixOperaLine(props) {
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