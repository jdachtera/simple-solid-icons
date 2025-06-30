import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M8.5 5.5C9.91162 5.97054 10.5483 7.65881 10.8268 9.52302L6.30385 12.134L7.30385 13.866L11.014 11.7247C11.0598 13.0789 11 14.3085 11 15C11 18 10 21 6 21C2 21 2 21 2 17C2 9.5 5.50055 4.50018 8.5 5.5ZM22.0012 17L22.001 17.436C21.9956 21 21.8503 21 18.0012 21C14.0012 21 13.0013 18 13.0013 15C13.0013 14.3086 12.9415 13.0795 12.9872 11.7257L16.6962 13.866L17.6962 12.134L13.1743 9.52402C13.4527 7.65942 14.0894 5.97062 15.5013 5.5C18.5007 4.50018 22.0012 9.5 22.0012 17ZM13 2V11H11V2H13Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixLungsFill(props) {
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