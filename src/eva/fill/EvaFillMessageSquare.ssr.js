import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>message-square</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"message-square\"><g id=\"message-square-2\" data-name=\"message-square\"><path d=\"M19,3H5A3,3,0,0,0,2,6V21a1,1,0,0,0,.51.87A1,1,0,0,0,3,22a1,1,0,0,0,.51-.14L8,19.14A1,1,0,0,1,8.55,19H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3ZM8,12a1,1,0,1,1,1-1A1,1,0,0,1,8,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,12Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,12Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillMessageSquare(props) {
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