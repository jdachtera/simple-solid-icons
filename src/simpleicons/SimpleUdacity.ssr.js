import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Udacity</title>",
  _tmpl$2 = "<path d=\"M8 0L0 4.8v9.6C0 20.8 4.8 24 8.8 24c1.348 0 2.786-.362 4.1-1.088l6.303-3.633C21.687 18.155 24 15.64 24 11.2V.8L22.4 0 16 4v10.4c0 1.6-.3 2.898-.785 3.948-2.002-.257-5.615-1.597-5.615-7.15V.802zm0 1.76v9.44c0 5.342 3.346 7.9 6.313 8.597-1.618 1.99-4.025 2.603-5.512 2.603-2.4 0-7.2-1.6-7.2-8V5.6zm14.4.04v9.4c0 5.45-3.482 6.84-5.504 7.132.446-1.14.704-2.45.704-3.932V4.8z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleUdacity(props) {
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