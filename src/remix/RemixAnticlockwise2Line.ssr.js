import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M13.4142 5.99996L15.2426 7.82839L13.8284 9.24261L9.58579 4.99996L13.8284 0.757324L15.2426 2.17154L13.4142 3.99996H16C18.7614 3.99996 21 6.23854 21 8.99996V13H19V8.99996C19 7.34311 17.6569 5.99996 16 5.99996H13.4142ZM15 11V21C15 21.5522 14.5523 22 14 22H4C3.44772 22 3 21.5522 3 21V11C3 10.4477 3.44772 9.99996 4 9.99996H14C14.5523 9.99996 15 10.4477 15 11ZM13 12H5V20H13V12Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixAnticlockwise2Line(props) {
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