import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M22 5V2l-5.89 5.89\"></path>",
  _tmpl$2 = "<circle cx=\"16.6\" cy=\"15.89\" r=\"3\"></circle>",
  _tmpl$3 = "<circle cx=\"8.11\" cy=\"7.4\" r=\"3\"></circle>",
  _tmpl$4 = "<circle cx=\"12.35\" cy=\"11.65\" r=\"3\"></circle>",
  _tmpl$5 = "<circle cx=\"13.91\" cy=\"5.85\" r=\"3\"></circle>",
  _tmpl$6 = "<circle cx=\"18.15\" cy=\"10.09\" r=\"3\"></circle>",
  _tmpl$7 = "<circle cx=\"6.56\" cy=\"13.2\" r=\"3\"></circle>",
  _tmpl$8 = "<circle cx=\"10.8\" cy=\"17.44\" r=\"3\"></circle>",
  _tmpl$9 = "<circle cx=\"5\" cy=\"19\" r=\"3\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideGrape(props) {
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