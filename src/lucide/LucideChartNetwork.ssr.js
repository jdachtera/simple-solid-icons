import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"m13.11 7.664 1.78 2.672\"></path>",
  _tmpl$2 = "<path d=\"m14.162 12.788-3.324 1.424\"></path>",
  _tmpl$3 = "<path d=\"m20 4-6.06 1.515\"></path>",
  _tmpl$4 = "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"></path>",
  _tmpl$5 = "<circle cx=\"12\" cy=\"6\" r=\"2\"></circle>",
  _tmpl$6 = "<circle cx=\"16\" cy=\"12\" r=\"2\"></circle>",
  _tmpl$7 = "<circle cx=\"9\" cy=\"15\" r=\"2\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideChartNetwork(props) {
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