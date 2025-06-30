import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>thermometer-minus</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"thermometer-minus\"><g id=\"thermometer-minus-2\" data-name=\"thermometer-minus\"><rect x=\"2\" y=\"5\" width=\"6\" height=\"2\" rx=\"1\" ry=\"1\"></rect><path d=\"M14,22a5,5,0,0,1-3-9V5a3,3,0,0,1,3-3,3,3,0,0,1,3,3v8a5,5,0,0,1-3,9ZM14,4a1,1,0,0,0-1,1v8.54a1,1,0,0,1-.5.87A3,3,0,0,0,11,17a3,3,0,0,0,6,0,3,3,0,0,0-1.5-2.59,1,1,0,0,1-.5-.87V5a.93.93,0,0,0-.29-.69A1,1,0,0,0,14,4Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineThermometerMinusOutline(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
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