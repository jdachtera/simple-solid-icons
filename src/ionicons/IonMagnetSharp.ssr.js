import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<line x1=\"191.98\" y1=\"463.58\" x2=\"191.98\" y2=\"415.58\" style=\"stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$2 = "<line x1=\"90.16\" y1=\"421.4\" x2=\"124.1\" y2=\"387.46\" style=\"stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$3 = "<line x1=\"47.98\" y1=\"319.58\" x2=\"95.98\" y2=\"319.58\" style=\"stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$4 = "<path d=\"M422.2,89.82a144,144,0,0,0-203.71-.07l-67.88,67.88,67.88,67.89,67.88-67.89a48,48,0,0,1,68.46.59c18.3,18.92,17.48,49.24-1.14,67.86L286.37,293.4l67.88,67.88,66.91-66.91C477.53,238,478.53,146.22,422.2,89.82Z\"></path>",
  _tmpl$5 = "<rect x=\"107.29\" y=\"188.83\" width=\"64\" height=\"96\" transform=\"translate(-126.67 167.86) rotate(-45)\"></rect>",
  _tmpl$6 = "<rect x=\"243.06\" y=\"324.59\" width=\"64\" height=\"96\" transform=\"translate(-182.9 303.62) rotate(-45)\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMagnetSharp(props) {
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