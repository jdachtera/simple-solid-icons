import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>charging</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"charging\"><g id=\"charging-2\" data-name=\"charging\"><path d=\"M11.28,13H7a1,1,0,0,1-.86-.5,1,1,0,0,1,0-1L9.28,6H4.17A2.31,2.31,0,0,0,2,8.43v7.14A2.31,2.31,0,0,0,4.17,18H8.42Z\"></path><path d=\"M15.83,6H11.58L8.72,11H13a1,1,0,0,1,.86.5,1,1,0,0,1,0,1L10.72,18h5.11A2.31,2.31,0,0,0,18,15.57V8.43A2.31,2.31,0,0,0,15.83,6Z\"></path><path d=\"M21,9a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V10A1,1,0,0,0,21,9Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillCharging(props) {
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