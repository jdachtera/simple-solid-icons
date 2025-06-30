import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<line x1=\"368\" y1=\"128\" x2=\"448\" y2=\"128\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$2 = "<line x1=\"64\" y1=\"128\" x2=\"304\" y2=\"128\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$3 = "<line x1=\"368\" y1=\"384\" x2=\"448\" y2=\"384\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$4 = "<line x1=\"64\" y1=\"384\" x2=\"304\" y2=\"384\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$5 = "<line x1=\"208\" y1=\"256\" x2=\"448\" y2=\"256\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$6 = "<line x1=\"64\" y1=\"256\" x2=\"144\" y2=\"256\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$7 = "<circle cx=\"336\" cy=\"128\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></circle>",
  _tmpl$8 = "<circle cx=\"176\" cy=\"256\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></circle>",
  _tmpl$9 = "<circle cx=\"336\" cy=\"384\" r=\"32\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonOptionsOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9)], true);
}