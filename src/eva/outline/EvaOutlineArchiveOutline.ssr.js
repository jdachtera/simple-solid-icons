import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>archive</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"archive\"><g id=\"archive-2\" data-name=\"archive\"><path d=\"M21,6a3,3,0,0,0-3-3H6A3,3,0,0,0,4,8.22V18a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8.22A3,3,0,0,0,21,6ZM6,5H18a1,1,0,0,1,0,2H6A1,1,0,0,1,6,5ZM18,18a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V9H18Z\"></path><rect x=\"9\" y=\"12\" width=\"6\" height=\"2\" rx=\"0.87\" ry=\"0.87\"></rect></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineArchiveOutline(props) {
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