import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M16 3h5v5\"></path>",
  _tmpl$2 = "<path d=\"M17 21h2a2 2 0 0 0 2-2\"></path>",
  _tmpl$3 = "<path d=\"M21 12v3\"></path>",
  _tmpl$4 = "<path d=\"m21 3-5 5\"></path>",
  _tmpl$5 = "<path d=\"M3 7V5a2 2 0 0 1 2-2\"></path>",
  _tmpl$6 = "<path d=\"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19\"></path>",
  _tmpl$7 = "<path d=\"M9 3h3\"></path>",
  _tmpl$8 = "<rect x=\"3\" y=\"11\" width=\"10\" height=\"10\" rx=\"1\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideImageUpscale(props) {
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