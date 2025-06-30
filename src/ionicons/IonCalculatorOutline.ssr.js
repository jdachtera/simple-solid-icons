import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"112\" y=\"48\" width=\"288\" height=\"416\" rx=\"32\" ry=\"32\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></rect>",
  _tmpl$2 = "<rect x=\"160.01\" y=\"112\" width=\"191.99\" height=\"64\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></rect>",
  _tmpl$3 = "<circle cx=\"168\" cy=\"248\" r=\"24\"></circle>",
  _tmpl$4 = "<circle cx=\"256\" cy=\"248\" r=\"24\"></circle>",
  _tmpl$5 = "<circle cx=\"344\" cy=\"248\" r=\"24\"></circle>",
  _tmpl$6 = "<circle cx=\"168\" cy=\"328\" r=\"24\"></circle>",
  _tmpl$7 = "<circle cx=\"256\" cy=\"328\" r=\"24\"></circle>",
  _tmpl$8 = "<circle cx=\"168\" cy=\"408\" r=\"24\"></circle>",
  _tmpl$9 = "<circle cx=\"256\" cy=\"408\" r=\"24\"></circle>",
  _tmpl$0 = "<rect x=\"320\" y=\"304\" width=\"48\" height=\"128\" rx=\"24\" ry=\"24\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCalculatorOutline(props) {
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