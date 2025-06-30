import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Gridsome</title>",
  _tmpl$2 = "<path d=\"M12.026.017l-.108.001C4.905.135-.102 5.975.002 11.956.025 19.286 6.02 24.13 12.083 23.98c7.208-.2 12.323-6.461 11.892-12.05a2.197 2.197 0 0 0-2.192-2.001h-3.15a2.155 2.155 0 0 0-2.161 2.147c0 1.187.967 2.148 2.16 2.148h.788c-.87 2.791-3.62 5.455-7.44 5.56-3.803.095-7.61-2.904-7.768-7.569a2.173 2.173 0 0 0 0-.159c-.148-3.72 2.895-7.637 7.88-7.845a2.096 2.096 0 0 0 2.003-2.183 2.095 2.095 0 0 0-2.07-2.011zm-.018 9.911a2.15 2.15 0 0 0-2.146 2.151 2.15 2.15 0 0 0 2.146 2.152 2.15 2.15 0 0 0 2.147-2.152 2.15 2.15 0 0 0-2.147-2.15Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGridsome(props) {
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