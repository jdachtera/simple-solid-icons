import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>backspace</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"backspace\"><g id=\"backspace-2\" data-name=\"backspace\"><path d=\"M20.14,4H10.37a3,3,0,0,0-2,.78l-.1.11-6,7.48a1,1,0,0,0,.11,1.37l6,5.48a3,3,0,0,0,2,.78h9.77A1.84,1.84,0,0,0,22,18.18V5.82A1.84,1.84,0,0,0,20.14,4Zm-3.43,9.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L14,13.41l-1.29,1.3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L12.59,12l-1.3-1.29a1,1,0,0,1,1.42-1.42L14,10.59l1.29-1.3a1,1,0,0,1,1.42,1.42L15.41,12Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillBackspace(props) {
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