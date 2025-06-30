import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"80\" y=\"16\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$2 = "<rect x=\"208\" y=\"16\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$3 = "<rect x=\"336\" y=\"16\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$4 = "<rect x=\"80\" y=\"144\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$5 = "<rect x=\"208\" y=\"144\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$6 = "<rect x=\"336\" y=\"144\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$7 = "<rect x=\"80\" y=\"272\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$8 = "<rect x=\"208\" y=\"272\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$9 = "<rect x=\"208\" y=\"400\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>",
  _tmpl$0 = "<rect x=\"336\" y=\"272\" width=\"96\" height=\"96\" rx=\"8\" ry=\"8\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonKeypadSharp(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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