import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Reason Studios</title>",
  _tmpl$2 = "<path d=\"M2.49 5.114l8.3-4.79a2.421 2.421 0 012.39-.017l.03.017 8.299 4.79c.74.427 1.2 1.212 1.211 2.065V16.79c0 .854-.451 1.645-1.184 2.08l-.027.016-8.299 4.79a2.42 2.42 0 01-2.39.017l-.03-.017-8.3-4.79a2.421 2.421 0 01-1.21-2.065V7.21c0-.855.45-1.645 1.184-2.08l.026-.016 8.3-4.79zM12 4.026L5.092 8.013v7.974L12 19.974V12l6.908-3.987z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleReasonstudios(props) {
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