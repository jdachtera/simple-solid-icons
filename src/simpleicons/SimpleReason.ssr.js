import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Reason</title>",
  _tmpl$2 = "<path d=\"M0 0v24h24V0H0zm11.52 21.89l-1.33-2.54H8.4v2.54H6v-9.2h4.13c2.44 0 3.83 1.19 3.83 3.24 0 1.39-.58 2.4-1.64 2.96l1.92 3h-2.72zm11.36 0H15.5v-9.2h7.24v1.92H17.9v1.72h4.38v1.9l-4.38.01v1.73h4.99v1.92zM11.68 16c0 .93-.56 1.43-1.53 1.43H8.4v-2.82h1.75c.97 0 1.53.49 1.53 1.4z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleReason(props) {
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