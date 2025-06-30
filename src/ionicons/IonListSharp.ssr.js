import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<line x1=\"144\" y1=\"144\" x2=\"464\" y2=\"144\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:48px\"></line>",
  _tmpl$2 = "<line x1=\"144\" y1=\"256\" x2=\"464\" y2=\"256\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:48px\"></line>",
  _tmpl$3 = "<line x1=\"144\" y1=\"368\" x2=\"464\" y2=\"368\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:48px\"></line>",
  _tmpl$4 = "<rect x=\"64\" y=\"128\" width=\"32\" height=\"32\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></rect>",
  _tmpl$5 = "<rect x=\"64\" y=\"240\" width=\"32\" height=\"32\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></rect>",
  _tmpl$6 = "<rect x=\"64\" y=\"352\" width=\"32\" height=\"32\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonListSharp(props) {
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