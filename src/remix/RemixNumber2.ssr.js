import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M16.0002 7.5C16.0002 5.29086 14.2094 3.5 12.0002 3.5C9.7911 3.5 8.00024 5.29086 8.00024 7.5H6.00024C6.00024 4.18629 8.68653 1.5 12.0002 1.5C15.314 1.5 18.0002 4.18629 18.0002 7.5C18.0002 8.93092 17.4993 10.2448 16.6633 11.276L9.344 19.9991L18.0002 20V22H6.00024L6 20.8731L15.0642 10.071C15.6485 9.37595 16.0002 8.47905 16.0002 7.5Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixNumber2(props) {
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