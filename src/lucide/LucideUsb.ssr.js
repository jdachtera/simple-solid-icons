import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"10\" cy=\"7\" r=\"1\"></circle>",
  _tmpl$2 = "<circle cx=\"4\" cy=\"20\" r=\"1\"></circle>",
  _tmpl$3 = "<path d=\"M4.7 19.3 19 5\"></path>",
  _tmpl$4 = "<path d=\"m21 3-3 1 2 2Z\"></path>",
  _tmpl$5 = "<path d=\"M9.26 7.68 5 12l2 5\"></path>",
  _tmpl$6 = "<path d=\"m10 14 5 2 3.5-3.5\"></path>",
  _tmpl$7 = "<path d=\"m18 12 1-1 1 1-1 1Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideUsb(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}