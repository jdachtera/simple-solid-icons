import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>options</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"options\"><g id=\"options-2\" data-name=\"options\"><path d=\"M7,14.18V3A1,1,0,0,0,5,3V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM6,18a1,1,0,1,1,1-1A1,1,0,0,1,6,18Z\"></path><path d=\"M21,13a3,3,0,0,0-2-2.82V3a1,1,0,0,0-2,0v7.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V15.82A3,3,0,0,0,21,13Zm-3,1a1,1,0,1,1,1-1A1,1,0,0,1,18,14Z\"></path><path d=\"M15,5a3,3,0,1,0-4,2.82V21a1,1,0,0,0,2,0V7.82A3,3,0,0,0,15,5ZM12,6a1,1,0,1,1,1-1A1,1,0,0,1,12,6Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineOptionsOutline(props) {
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