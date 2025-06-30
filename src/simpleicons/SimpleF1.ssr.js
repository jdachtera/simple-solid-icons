import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>F1</title>",
  _tmpl$2 = "<path d=\"M9.6 11.24h7.91L19.75 9H9.39c-2.85 0-3.62.34-5.17 1.81C2.71 12.3 0 15 0 15h3.38c.77-.75 2.2-2.13 2.85-2.75.92-.87 1.37-1.01 3.37-1.01zM20.39 9l-6 6H18l6-6h-3.61zm-3.25 2.61H9.88c-2.22 0-2.6.12-3.55 1.07C5.44 13.57 4 15 4 15h3.15l.75-.75c.49-.49.75-.55 1.78-.55h5.37l2.09-2.09z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleF1(props) {
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