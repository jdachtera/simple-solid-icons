import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Octane Render</title>",
  _tmpl$2 = "<path d=\"M11.71 0C8.24 3.9 6.92 6 6.64 9.14c-.01-.01-.03-.01-.04-.02-1.28-.73-2.3-2.22-2.91-3.73l-2.23.87c1.64 4.95 2.81 7.13 5.39 8.94-.02.01-.03.02-.05.03-1.27.74-3.07.89-4.68.66l-.36 2.37c5.11 1.06 7.59 1.15 10.46-.19v.06c0 1.47-.77 3.09-1.78 4.38L12.3 24c3.46-3.89 4.78-5.99 5.06-9.13.02.01.03.01.05.02 1.27.73 2.29 2.21 2.9 3.73l2.23-.87c-1.64-4.95-2.8-7.14-5.39-8.95.02-.01.03-.02.05-.03 1.27-.74 3.07-.88 4.68-.65l.36-2.38c-5.1-1.06-7.58-1.14-10.44.19v-.06c0-1.47.77-3.09 1.78-4.38L11.71 0zm.19 8.82a3.181 3.181 0 0 1 3.28 3.07 3.181 3.181 0 0 1-3.07 3.28 3.181 3.181 0 0 1-3.28-3.07 3.181 3.181 0 0 1 3.07-3.28z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOctanerender(props) {
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