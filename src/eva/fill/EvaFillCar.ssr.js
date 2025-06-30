import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>car</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"car\"><g id=\"car-2\" data-name=\"car\"><path d=\"M21.6,11.22,17,7.52V5a1.91,1.91,0,0,0-1.81-2H3.79A1.91,1.91,0,0,0,2,5V15A2,2,0,0,0,3.2,16.88,3,3,0,1,0,8.8,17h6.36a3,3,0,1,0,5.64,0H21a1,1,0,0,0,1-1V12A1,1,0,0,0,21.6,11.22ZM20,12.48V15H17V10.08ZM7,18a1,1,0,1,1-1-1A1,1,0,0,1,7,18Zm12,0a1,1,0,1,1-1-1A1,1,0,0,1,19,18Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillCar(props) {
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