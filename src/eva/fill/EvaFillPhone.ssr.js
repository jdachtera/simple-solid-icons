import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>phone</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"phone\"><g id=\"phone-2\" data-name=\"phone\"><path d=\"M17.4,22A15.42,15.42,0,0,1,2,6.6,4.6,4.6,0,0,1,6.6,2a3.94,3.94,0,0,1,.77.07,3.79,3.79,0,0,1,.72.18A1,1,0,0,1,8.74,3l1.37,6a1,1,0,0,1-.26.92c-.13.14-.14.15-1.37.79a9.91,9.91,0,0,0,4.87,4.89c.65-1.24.66-1.25.8-1.38a1,1,0,0,1,.92-.26l6,1.37a1,1,0,0,1,.72.65,4.34,4.34,0,0,1,.19.73,4.77,4.77,0,0,1,.06.76A4.6,4.6,0,0,1,17.4,22Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillPhone(props) {
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