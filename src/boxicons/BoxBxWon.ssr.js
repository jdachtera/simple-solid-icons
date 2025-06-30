import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M21.758 5H19.68l-.844 3h-4.893l-.899-3h-2.088l-.899 3H5.164L4.32 5H2.242l.844 3H2v2h1.648l.563 2H2v2h2.773l1.688 6h2.083l1.8-6h3.313l1.8 6h2.083l1.688-6H22v-2h-2.211l.563-2H22V8h-1.086l.844-3zM5.727 10h3.729l-.6 2H6.289l-.562-2zm1.804 6.417L6.852 14h1.404l-.725 2.417zM10.944 12l.6-2h.912l.6 2h-2.112zm5.525 4.417L15.744 14h1.404l-.679 2.417zM17.711 12h-2.567l-.6-2h3.729l-.562 2z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxWon(props) {
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
  }), () => _$ssr(_tmpl$), true);
}