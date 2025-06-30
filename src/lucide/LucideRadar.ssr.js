import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M19.07 4.93A10 10 0 0 0 6.99 3.34\"></path>",
  _tmpl$2 = "<path d=\"M4 6h.01\"></path>",
  _tmpl$3 = "<path d=\"M2.29 9.62A10 10 0 1 0 21.31 8.35\"></path>",
  _tmpl$4 = "<path d=\"M16.24 7.76A6 6 0 1 0 8.23 16.67\"></path>",
  _tmpl$5 = "<path d=\"M12 18h.01\"></path>",
  _tmpl$6 = "<path d=\"M17.99 11.66A6 6 0 0 1 15.77 16.67\"></path>",
  _tmpl$7 = "<circle cx=\"12\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$8 = "<path d=\"m13.41 10.59 5.66-5.66\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideRadar(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}