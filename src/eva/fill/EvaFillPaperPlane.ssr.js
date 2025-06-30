import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>paper-plane</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"paper-plane\"><g id=\"paper-plane-2\" data-name=\"paper-plane\"><path d=\"M21,4a1.31,1.31,0,0,0-.06-.27l0-.09a1,1,0,0,0-.2-.3,1,1,0,0,0-.29-.19l-.09,0A.86.86,0,0,0,20.05,3H20a1,1,0,0,0-.3,0l-18,6a1,1,0,0,0,0,1.9l8.53,2.84,2.84,8.53a1,1,0,0,0,1.9,0l6-18A1,1,0,0,0,21,4ZM16.3,6.29l-5.57,5.57L5.16,10ZM14,18.84l-1.86-5.57L17.71,7.7Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillPaperPlane(props) {
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