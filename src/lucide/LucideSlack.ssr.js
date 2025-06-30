import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect width=\"3\" height=\"8\" x=\"13\" y=\"2\" rx=\"1.5\"></rect>",
  _tmpl$2 = "<path d=\"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5\"></path>",
  _tmpl$3 = "<rect width=\"3\" height=\"8\" x=\"8\" y=\"14\" rx=\"1.5\"></rect>",
  _tmpl$4 = "<path d=\"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5\"></path>",
  _tmpl$5 = "<rect width=\"8\" height=\"3\" x=\"14\" y=\"13\" rx=\"1.5\"></rect>",
  _tmpl$6 = "<path d=\"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5\"></path>",
  _tmpl$7 = "<rect width=\"8\" height=\"3\" x=\"2\" y=\"8\" rx=\"1.5\"></rect>",
  _tmpl$8 = "<path d=\"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideSlack(props) {
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