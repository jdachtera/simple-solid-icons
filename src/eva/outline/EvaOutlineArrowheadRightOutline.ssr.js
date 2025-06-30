import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>arrowhead-right</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"arrowhead-right\"><g id=\"arrowhead-right-2\" data-name=\"arrowhead-right\"><path d=\"M18.78,11.37,14,5.37a1,1,0,0,0-1.41-.15,1,1,0,0,0-.15,1.41L16.71,12l-4.48,5.37a1,1,0,0,0,.13,1.41A1,1,0,0,0,13,19a1,1,0,0,0,.77-.36l5-6A1,1,0,0,0,18.78,11.37Z\"></path><path d=\"M7,5.37A1,1,0,0,0,5.39,6.63L9.71,12,5.23,17.36a1,1,0,0,0,.13,1.41A1,1,0,0,0,6,19a1,1,0,0,0,.77-.36l5-6a1,1,0,0,0,0-1.27Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineArrowheadRightOutline(props) {
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