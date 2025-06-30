import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<polyline points=\"400 400.33 448 400 448 112 400 112.33\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></polyline>",
  _tmpl$2 = "<polyline points=\"112 112 64 112.33 64 400.33 112 400\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></polyline>",
  _tmpl$3 = "<line x1=\"384\" y1=\"192\" x2=\"384\" y2=\"320\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$4 = "<line x1=\"320\" y1=\"160\" x2=\"320\" y2=\"352\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$5 = "<line x1=\"256\" y1=\"176\" x2=\"256\" y2=\"336\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$6 = "<line x1=\"192\" y1=\"160\" x2=\"192\" y2=\"352\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$7 = "<line x1=\"128\" y1=\"192\" x2=\"128\" y2=\"320\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBarcodeSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}