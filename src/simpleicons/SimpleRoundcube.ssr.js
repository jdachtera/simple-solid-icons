import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Roundcube</title>",
  _tmpl$2 = "<path d=\"M12.002.072a8.302 8.302 0 0 0-8.266 7.512L.498 9.454l4.682 2.704A7.8 7.8 0 0 1 12.002.572a7.802 7.802 0 0 1 6.824 11.582l4.676-2.7-3.236-1.87A8.302 8.302 0 0 0 12.002.072zM0 9.742v7.399l11.75 6.787v-7.399L0 9.742zm24 0l-5.777 3.338-5.248 3.031h-.002l-.108.063-.615.355v7.399L24 17.14V9.744z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRoundcube(props) {
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