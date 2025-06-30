import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>music</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"music\"><g id=\"music-2\" data-name=\"music\"><path d=\"M19,15V4a1,1,0,0,0-.38-.78,1,1,0,0,0-.84-.2l-9,2A1,1,0,0,0,8,6v8.34a3.49,3.49,0,1,0,2,3.18A4.36,4.36,0,0,0,10,17V6.8l7-1.55v7.09A3.49,3.49,0,1,0,19,15.51,4.57,4.57,0,0,0,19,15ZM6.54,19A1.49,1.49,0,1,1,8,17.21H8a1.53,1.53,0,0,1,0,.3A1.49,1.49,0,0,1,6.54,19Zm9-2A1.5,1.5,0,1,1,17,15.21h0a1.53,1.53,0,0,1,0,.3A1.5,1.5,0,0,1,15.51,17Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineMusicOutline(props) {
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