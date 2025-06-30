import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>at</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"at\"><g id=\"at-2\" data-name=\"at\"><path d=\"M13,2a10,10,0,0,0-5,19.1A10.15,10.15,0,0,0,12,22a10,10,0,0,0,6.08-2.06,1,1,0,0,0,.19-1.4,1,1,0,0,0-1.41-.19A8,8,0,1,1,12.77,4,8.17,8.17,0,0,1,20,12.22v.68a1.71,1.71,0,0,1-1.78,1.7,1.82,1.82,0,0,1-1.62-1.88V8.4a1,1,0,0,0-1-1,1,1,0,0,0-1,.87,5,5,0,0,0-3.44-1.36A5.09,5.09,0,1,0,15.31,15a3.6,3.6,0,0,0,5.55.61A3.67,3.67,0,0,0,22,12.9v-.68A10.2,10.2,0,0,0,13,2ZM11.18,15.09A3.09,3.09,0,1,1,14.27,12,3.1,3.1,0,0,1,11.18,15.09Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillAt(props) {
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