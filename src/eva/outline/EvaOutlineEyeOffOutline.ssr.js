import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>eye-off</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"eye-off\"><g id=\"eye-off-2\" data-name=\"eye-off\"><path d=\"M4.71,3.29A1,1,0,0,0,3.29,4.71l5.63,5.63a3.5,3.5,0,0,0,4.74,4.74l5.63,5.63a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,13.5A1.5,1.5,0,0,1,10.5,12s0-.05,0-.07l1.56,1.56Z\"></path><path d=\"M12.22,17c-4.3.1-7.12-3.59-8-5A13.7,13.7,0,0,1,6.46,9.28L5,7.87A15.89,15.89,0,0,0,2.13,11.5a1,1,0,0,0,0,1c.63,1.09,4,6.5,9.89,6.5h.25a9.48,9.48,0,0,0,3.23-.67l-1.58-1.58A7.74,7.74,0,0,1,12.22,17Z\"></path><path d=\"M21.87,11.5C21.23,10.39,17.7,4.82,11.73,5a9.48,9.48,0,0,0-3.23.67l1.58,1.58A7.74,7.74,0,0,1,11.78,7c4.29-.11,7.11,3.59,8,5a13.7,13.7,0,0,1-2.29,2.72L19,16.13a15.89,15.89,0,0,0,2.91-3.63A1,1,0,0,0,21.87,11.5Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineEyeOffOutline(props) {
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