import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Guilded</title>",
  _tmpl$2 = "<path d=\"M5.297 6.255s.02 2.846 1.481 5.79c1.502 2.834 3.572 4.654 5.28 5.38 1.765-.826 3.47-2.258 4.4-3.8h-4.845c-1.253-1.04-2.24-2.763-2.466-4.755H23.36c-.701 3.203-2.188 6.116-3.605 7.971a17.108 17.108 0 01-7.686 5.659h-.045c-5.098-2.031-7.84-5.23-9.65-8.84C1.214 11.347 0 7.147 0 1.5h24a34.23 34.23 0 01-.32 4.755z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGuilded(props) {
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