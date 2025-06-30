import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>calendar</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"calendar\"><g id=\"calendar-2\" data-name=\"calendar\"><path d=\"M18,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H6A3,3,0,0,0,3,7V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V7A3,3,0,0,0,18,4ZM6,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h1a1,1,0,0,1,1,1v4H5V7A1,1,0,0,1,6,6ZM18,20H6a1,1,0,0,1-1-1V13H19v6A1,1,0,0,1,18,20Z\"></path><circle cx=\"8\" cy=\"16\" r=\"1\"></circle><path d=\"M16,15H12a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineCalendarOutline(props) {
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