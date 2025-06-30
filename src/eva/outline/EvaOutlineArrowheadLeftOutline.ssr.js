import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>arrowhead-left</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"arrowhead-left\"><g id=\"arrowhead-left-2\" data-name=\"arrowhead-left\"><path d=\"M11.64,5.23a1,1,0,0,0-1.41.13l-5,6a1,1,0,0,0,0,1.27l4.83,6a1,1,0,0,0,.78.37,1,1,0,0,0,.78-1.63L7.29,12l4.48-5.37A1,1,0,0,0,11.64,5.23Z\"></path><path d=\"M14.29,12l4.48-5.37a1,1,0,0,0-1.54-1.28l-5,6a1,1,0,0,0,0,1.27l4.83,6a1,1,0,0,0,.78.37,1,1,0,0,0,.78-1.63Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineArrowheadLeftOutline(props) {
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