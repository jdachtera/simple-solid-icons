import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m10 20-1.25-2.5L6 18\"></path>",
  _tmpl$2 = "<path d=\"M10 4 8.75 6.5 6 6\"></path>",
  _tmpl$3 = "<path d=\"m14 20 1.25-2.5L18 18\"></path>",
  _tmpl$4 = "<path d=\"m14 4 1.25 2.5L18 6\"></path>",
  _tmpl$5 = "<path d=\"m17 21-3-6h-4\"></path>",
  _tmpl$6 = "<path d=\"m17 3-3 6 1.5 3\"></path>",
  _tmpl$7 = "<path d=\"M2 12h6.5L10 9\"></path>",
  _tmpl$8 = "<path d=\"m20 10-1.5 2 1.5 2\"></path>",
  _tmpl$9 = "<path d=\"M22 12h-6.5L14 15\"></path>",
  _tmpl$0 = "<path d=\"m4 10 1.5 2L4 14\"></path>",
  _tmpl$1 = "<path d=\"m7 21 3-6-1.5-3\"></path>",
  _tmpl$10 = "<path d=\"m7 3 3 6h4\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideSnowflake(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1), _$ssr(_tmpl$10)], true);
}