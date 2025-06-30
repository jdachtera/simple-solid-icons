import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M10.17 4.193a2 2 0 0 1 3.666.013\"></path>",
  _tmpl$2 = "<path d=\"M14 21h2\"></path>",
  _tmpl$3 = "<path d=\"m15.874 7.743 1 1.732\"></path>",
  _tmpl$4 = "<path d=\"m18.849 12.952 1 1.732\"></path>",
  _tmpl$5 = "<path d=\"M21.824 18.18a2 2 0 0 1-1.835 2.824\"></path>",
  _tmpl$6 = "<path d=\"M4.024 21a2 2 0 0 1-1.839-2.839\"></path>",
  _tmpl$7 = "<path d=\"m5.136 12.952-1 1.732\"></path>",
  _tmpl$8 = "<path d=\"M8 21h2\"></path>",
  _tmpl$9 = "<path d=\"m8.102 7.743-1 1.732\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideTriangleDashed(props) {
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