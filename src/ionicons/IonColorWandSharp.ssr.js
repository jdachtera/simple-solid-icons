import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"158.6\" y=\"150.86\" width=\"95.03\" height=\"110.51\" transform=\"translate(-85.38 206.12) rotate(-45)\"></rect>",
  _tmpl$2 = "<polygon points=\"301.41 234.21 234.22 301.41 412 480 480 412 301.41 234.21\"></polygon>",
  _tmpl$3 = "<rect x=\"32\" y=\"176\" width=\"80\" height=\"32\"></rect>",
  _tmpl$4 = "<rect x=\"91.22\" y=\"67.22\" width=\"32\" height=\"80\" transform=\"translate(-44.41 107.22) rotate(-45)\"></rect>",
  _tmpl$5 = "<rect x=\"176\" y=\"32\" width=\"32\" height=\"80\"></rect>",
  _tmpl$6 = "<rect x=\"236.92\" y=\"91.22\" width=\"80\" height=\"32\" transform=\"translate(5.29 227.22) rotate(-45)\"></rect>",
  _tmpl$7 = "<rect x=\"67.22\" y=\"260.92\" width=\"80\" height=\"32\" transform=\"translate(-164.41 156.92) rotate(-45)\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonColorWandSharp(props) {
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