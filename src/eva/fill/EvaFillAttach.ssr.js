import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>attach</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"attach\"><g id=\"attach-2\" data-name=\"attach\"><path d=\"M9.29,21h0a6.23,6.23,0,0,1-4.43-1.88,6,6,0,0,1-.22-8.49L12,3.2A4.11,4.11,0,0,1,15,2a4.48,4.48,0,0,1,3.19,1.35,4.36,4.36,0,0,1,.15,6.13l-7.4,7.43a2.54,2.54,0,0,1-1.81.75h0a2.72,2.72,0,0,1-1.95-.82,2.68,2.68,0,0,1-.08-3.77l6.83-6.86A1,1,0,0,1,15.3,7.62L8.47,14.48a.68.68,0,0,0,.08.95.78.78,0,0,0,.53.23h0a.56.56,0,0,0,.4-.16l7.39-7.43a2.36,2.36,0,0,0-.15-3.31,2.38,2.38,0,0,0-3.27-.15L6.06,12a4,4,0,0,0,.22,5.67,4.22,4.22,0,0,0,3,1.29,3.67,3.67,0,0,0,2.61-1.06l7.39-7.43a1,1,0,1,1,1.42,1.41l-7.39,7.43A5.65,5.65,0,0,1,9.29,21Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillAttach(props) {
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