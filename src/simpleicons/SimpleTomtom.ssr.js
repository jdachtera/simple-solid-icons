import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>TomTom</title>",
  _tmpl$2 = "<path d=\"M12 12.584a4.325 4.325 0 0 1-4.32-4.32A4.325 4.325 0 0 1 12 3.944a4.325 4.325 0 0 1 4.32 4.32 4.325 4.325 0 0 1-4.32 4.32zM12 0C7.443 0 3.736 3.707 3.736 8.264c0 4.557 3.707 8.264 8.264 8.264 4.557 0 8.264-3.707 8.264-8.264C20.264 3.707 16.557 0 12 0m0 24 3.167-5.486H8.833Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleTomtom(props) {
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