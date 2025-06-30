import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>percent</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"percent\"><g id=\"percent-2\" data-name=\"percent\"><path d=\"M8,11A3.5,3.5,0,1,0,4.5,7.5,3.5,3.5,0,0,0,8,11ZM8,6A1.5,1.5,0,1,1,6.5,7.5,1.5,1.5,0,0,1,8,6Z\"></path><path d=\"M16,14a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,16,14Zm0,5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,19Z\"></path><path d=\"M19.74,4.26a.89.89,0,0,0-1.26,0L4.26,18.48a.91.91,0,0,0-.26.63.89.89,0,0,0,1.52.63L19.74,5.52A.89.89,0,0,0,19.74,4.26Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillPercent(props) {
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