import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20\"></path>",
  _tmpl$2 = "<path d=\"M16 18h-5\"></path>",
  _tmpl$3 = "<path d=\"M18 5a1 1 0 0 0-1 1v5.573\"></path>",
  _tmpl$4 = "<path d=\"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246\"></path>",
  _tmpl$5 = "<path d=\"M4 11V4\"></path>",
  _tmpl$6 = "<path d=\"M7 15h.01\"></path>",
  _tmpl$7 = "<path d=\"M8 10.1V4\"></path>",
  _tmpl$8 = "<circle cx=\"18\" cy=\"18\" r=\"2\"></circle>",
  _tmpl$9 = "<circle cx=\"7\" cy=\"15\" r=\"5\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideTractor(props) {
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