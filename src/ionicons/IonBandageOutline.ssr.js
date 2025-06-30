import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"-24.43\" y=\"167.88\" width=\"560.87\" height=\"176.25\" rx=\"88.12\" ry=\"88.12\" transform=\"translate(-106.04 256) rotate(-45)\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></rect>",
  _tmpl$2 = "<rect x=\"169.41\" y=\"156.59\" width=\"176\" height=\"196\" rx=\"32\" ry=\"32\" transform=\"translate(255.41 -107.45) rotate(45)\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></rect>",
  _tmpl$3 = "<circle cx=\"256\" cy=\"208\" r=\"16\"></circle>",
  _tmpl$4 = "<circle cx=\"304\" cy=\"256\" r=\"16\"></circle>",
  _tmpl$5 = "<circle cx=\"208\" cy=\"256\" r=\"16\"></circle>",
  _tmpl$6 = "<circle cx=\"256\" cy=\"304\" r=\"16\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBandageOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6)], true);
}