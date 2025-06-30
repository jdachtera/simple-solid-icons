import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>arrowhead-up</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"arrowhead-up\"><g id=\"arrowhead-up-2\" data-name=\"arrowhead-up\"><path d=\"M6.63,11.61,12,7.29l5.37,4.48A1,1,0,0,0,18,12a1,1,0,0,0,.77-.36,1,1,0,0,0-.13-1.41l-6-5a1,1,0,0,0-1.27,0l-6,4.83a1,1,0,0,0-.15,1.41A1,1,0,0,0,6.63,11.61Z\"></path><path d=\"M12.64,12.23a1,1,0,0,0-1.27,0l-6,4.83a1,1,0,0,0-.15,1.41,1,1,0,0,0,1.41.15L12,14.29l5.37,4.48A1,1,0,0,0,18,19a1,1,0,0,0,.77-.36,1,1,0,0,0-.13-1.41Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineArrowheadUpOutline(props) {
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