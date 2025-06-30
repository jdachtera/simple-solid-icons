import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M10 18H5a3 3 0 0 1-3-3v-1\"></path>",
  _tmpl$2 = "<path d=\"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2\"></path>",
  _tmpl$3 = "<path d=\"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2\"></path>",
  _tmpl$4 = "<path d=\"m7 21 3-3-3-3\"></path>",
  _tmpl$5 = "<rect x=\"14\" y=\"14\" width=\"8\" height=\"8\" rx=\"2\"></rect>",
  _tmpl$6 = "<rect x=\"2\" y=\"2\" width=\"8\" height=\"8\" rx=\"2\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideCombine(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6)], true);
}