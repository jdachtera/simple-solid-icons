import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M3 3h.01\"></path>",
  _tmpl$2 = "<path d=\"M7 5h.01\"></path>",
  _tmpl$3 = "<path d=\"M11 7h.01\"></path>",
  _tmpl$4 = "<path d=\"M3 7h.01\"></path>",
  _tmpl$5 = "<path d=\"M7 9h.01\"></path>",
  _tmpl$6 = "<path d=\"M3 11h.01\"></path>",
  _tmpl$7 = "<rect width=\"4\" height=\"4\" x=\"15\" y=\"5\"></rect>",
  _tmpl$8 = "<path d=\"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2\"></path>",
  _tmpl$9 = "<path d=\"m13 14 8-2\"></path>",
  _tmpl$0 = "<path d=\"m13 19 8-2\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideSprayCan(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0)], true);
}