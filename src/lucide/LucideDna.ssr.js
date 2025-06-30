import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m10 16 1.5 1.5\"></path>",
  _tmpl$2 = "<path d=\"m14 8-1.5-1.5\"></path>",
  _tmpl$3 = "<path d=\"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993\"></path>",
  _tmpl$4 = "<path d=\"m16.5 10.5 1 1\"></path>",
  _tmpl$5 = "<path d=\"m17 6-2.891-2.891\"></path>",
  _tmpl$6 = "<path d=\"M2 15c6.667-6 13.333 0 20-6\"></path>",
  _tmpl$7 = "<path d=\"m20 9 .891.891\"></path>",
  _tmpl$8 = "<path d=\"M3.109 14.109 4 15\"></path>",
  _tmpl$9 = "<path d=\"m6.5 12.5 1 1\"></path>",
  _tmpl$0 = "<path d=\"m7 18 2.891 2.891\"></path>",
  _tmpl$1 = "<path d=\"M9 22c1.798-1.998 2.518-3.995 2.807-5.993\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideDna(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1)], true);
}