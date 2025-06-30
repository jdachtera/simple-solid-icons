import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>bell-off</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"bell-off\"><g id=\"bell-off-2\" data-name=\"bell-off\"><path d=\"M8.9,5.17A4.67,4.67,0,0,1,12.64,4a4.86,4.86,0,0,1,4.08,4.9V13.4a1.92,1.92,0,0,0,.1.59l3.6,3.6a1.58,1.58,0,0,0,.45-.6,1.62,1.62,0,0,0-.35-1.78l-1.8-1.81V8.94A6.86,6.86,0,0,0,12.9,2.06,6.71,6.71,0,0,0,7.58,3.67,6.88,6.88,0,0,0,7,4.21L8.47,5.64A4.79,4.79,0,0,1,8.9,5.17Z\"></path><path d=\"M14,16.86,13.17,16H5.51l1.18-1.18a2,2,0,0,0,.59-1.42V10.11l-2-2a5.68,5.68,0,0,0,0,.59V13.4l-1.8,1.81A1.63,1.63,0,0,0,4.64,18H8v.34A3.84,3.84,0,0,0,12,22,3.88,3.88,0,0,0,16,18.78L15.17,18ZM12,20a1.88,1.88,0,0,1-2-1.66V18h4v.34A1.88,1.88,0,0,1,12,20Z\"></path><path d=\"M20.71,19.29,19.41,18l-2-2L7.89,6.47,6.42,5,4.71,3.29A1,1,0,0,0,3.29,4.71L5.53,7,7.28,8.7,14.59,16l.07.07L16,17.41l.59.59,2.7,2.71a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineBellOffOutline(props) {
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