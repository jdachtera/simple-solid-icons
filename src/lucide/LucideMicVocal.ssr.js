import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12\"></path>",
  _tmpl$2 = "<path d=\"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5\"></path>",
  _tmpl$3 = "<circle cx=\"16\" cy=\"7\" r=\"5\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideMicVocal(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}