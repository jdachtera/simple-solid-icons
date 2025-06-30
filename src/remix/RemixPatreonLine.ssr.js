import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M15.001 17C10.8588 17 7.50098 13.6421 7.50098 9.5C7.50098 5.35786 10.8588 2 15.001 2C19.1431 2 22.501 5.35786 22.501 9.5C22.501 13.6421 19.1431 17 15.001 17ZM15.001 15C18.0385 15 20.501 12.5376 20.501 9.5C20.501 6.46243 18.0385 4 15.001 4C11.9634 4 9.50098 6.46243 9.50098 9.5C9.50098 12.5376 11.9634 15 15.001 15ZM2.00098 2H7.00098V22H2.00098V2ZM4.00098 4V20H5.00098V4H4.00098Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixPatreonLine(props) {
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