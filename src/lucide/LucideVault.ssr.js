import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"></rect>",
  _tmpl$2 = "<circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$3 = "<path d=\"m7.9 7.9 2.7 2.7\"></path>",
  _tmpl$4 = "<circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$5 = "<path d=\"m13.4 10.6 2.7-2.7\"></path>",
  _tmpl$6 = "<circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$7 = "<path d=\"m7.9 16.1 2.7-2.7\"></path>",
  _tmpl$8 = "<circle cx=\"16.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"></circle>",
  _tmpl$9 = "<path d=\"m13.4 13.4 2.7 2.7\"></path>",
  _tmpl$0 = "<circle cx=\"12\" cy=\"12\" r=\"2\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideVault(props) {
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