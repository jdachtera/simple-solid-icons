import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>DevExpress</title>",
  _tmpl$2 = "<path d=\"M1.4 0h21.2c.8 0 1.4.6 1.4 1.4v1.1c0 .8-.6 1-.9 1C11.7 4.9 4.2 9.7 0 14.1V1.4C0 .6.6 0 1.4 0zm.022 19.567L1.7 19.2C5.3 14.6 12.4 8.3 24 6.3v16.3c0 .8-.6 1.4-1.4 1.4H1.4C.6 24 0 23.4 0 22.6v-.4c0-.3.2-.8.3-.9.252-.589.646-1.107 1.122-1.733z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleDevexpress(props) {
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