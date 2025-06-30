import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Paysafe</title>",
  _tmpl$2 = "<path d=\"m23.905 12.233-7.672 7.673a.16.16 0 0 1-.115.047h-.048a.162.162 0 0 1-.162-.161v-7.787a.324.324 0 0 1-.094.228L8.188 19.86a.332.332 0 0 1-.466 0L.095 12.235a.332.332 0 0 1 0-.466L7.72 4.142a.334.334 0 0 1 .467 0l7.625 7.625c.06.06.094.143.094.23V4.208c0-.089.073-.162.162-.162h.048c.043 0 .084.018.115.048l7.672 7.672a.333.333 0 0 1 .002.467z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePaysafe(props) {
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