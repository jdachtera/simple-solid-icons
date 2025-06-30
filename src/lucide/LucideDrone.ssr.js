import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M10 10 7 7\"></path>",
  _tmpl$2 = "<path d=\"m10 14-3 3\"></path>",
  _tmpl$3 = "<path d=\"m14 10 3-3\"></path>",
  _tmpl$4 = "<path d=\"m14 14 3 3\"></path>",
  _tmpl$5 = "<path d=\"M14.205 4.139a4 4 0 1 1 5.439 5.863\"></path>",
  _tmpl$6 = "<path d=\"M19.637 14a4 4 0 1 1-5.432 5.868\"></path>",
  _tmpl$7 = "<path d=\"M4.367 10a4 4 0 1 1 5.438-5.862\"></path>",
  _tmpl$8 = "<path d=\"M9.795 19.862a4 4 0 1 1-5.429-5.873\"></path>",
  _tmpl$9 = "<rect x=\"10\" y=\"8\" width=\"4\" height=\"8\" rx=\"1\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideDrone(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9)], true);
}