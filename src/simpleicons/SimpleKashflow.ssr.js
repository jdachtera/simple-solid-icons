import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>KashFlow</title>",
  _tmpl$2 = "<path d=\"M16.278 2.141l-.83 2.702C8.007.174 2.958 4.724 2.958 4.724-1.638 8.564.49 14.678.495 14.678 1.252-.016 14.24 8.943 14.24 8.943c-.237 1.066-.996 2.63-.972 2.654l8.508-1.256zm7.228 7.181C22.747 24.016 9.76 15.057 9.76 15.057c.332-1.066 1.02-2.654 1.02-2.607L2.27 13.66l5.451 8.2.83-2.702c7.441 4.669 12.49.119 12.49.119 4.597-3.84 2.464-9.954 2.464-9.954z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleKashflow(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}