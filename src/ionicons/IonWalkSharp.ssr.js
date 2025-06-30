import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M315.09,481.38,258.14,366.26l-45-57.56a73.11,73.11,0,0,1-10.16-37.17V142h15.73A40.36,40.36,0,0,1,259,182.32V344.84\" style=\"stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></path>",
  _tmpl$2 = "<polyline points=\"128.18 291.5 128.18 216.73 193.13 151.63\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></polyline>",
  _tmpl$3 = "<polygon points=\"376.35 295.73 292.4 239.35 292.4 194.67 397.08 267.62 376.35 295.73\"></polygon>",
  _tmpl$4 = "<polygon points=\"175.13 498.58 153.7 471.67 234.03 390.13 249.56 422.2 175.13 498.58\"></polygon>",
  _tmpl$5 = "<circle cx=\"259.02\" cy=\"67.21\" r=\"37.38\" style=\"stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:16px\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonWalkSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5)], true);
}