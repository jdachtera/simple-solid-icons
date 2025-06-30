import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M200.66,352H144a96,96,0,0,1,0-192h55.41\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px\"></path>",
  _tmpl$2 = "<path d=\"M312.59,160H368a96,96,0,0,1,0,192H311.34\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px\"></path>",
  _tmpl$3 = "<line x1=\"169.07\" y1=\"256\" x2=\"344.93\" y2=\"256\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonLinkSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}