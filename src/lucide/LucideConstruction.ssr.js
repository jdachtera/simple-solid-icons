import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"2\" y=\"6\" width=\"20\" height=\"8\" rx=\"1\"></rect>",
  _tmpl$2 = "<path d=\"M17 14v7\"></path>",
  _tmpl$3 = "<path d=\"M7 14v7\"></path>",
  _tmpl$4 = "<path d=\"M17 3v3\"></path>",
  _tmpl$5 = "<path d=\"M7 3v3\"></path>",
  _tmpl$6 = "<path d=\"M10 14 2.3 6.3\"></path>",
  _tmpl$7 = "<path d=\"m14 6 7.7 7.7\"></path>",
  _tmpl$8 = "<path d=\"m8 6 8 8\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideConstruction(props) {
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