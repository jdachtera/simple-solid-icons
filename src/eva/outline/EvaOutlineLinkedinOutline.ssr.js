import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>linkedin</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"linkedin\"><g id=\"linkedin-2\" data-name=\"linkedin\"><path d=\"M20,22H18.33a2,2,0,0,1-2-2V14.63a.92.92,0,0,0-.69-.93.84.84,0,0,0-.67.19.85.85,0,0,0-.3.65V20a2,2,0,0,1-2,2H11a2,2,0,0,1-2-2V14.54a6.5,6.5,0,1,1,13,0V20A2,2,0,0,1,20,22ZM15.5,11.69a3.73,3.73,0,0,1,.47,0,2.91,2.91,0,0,1,2.36,2.9V20H20V14.54a4.5,4.5,0,1,0-9,0V20h1.67V14.54a2.85,2.85,0,0,1,2.83-2.85Z\"></path><path d=\"M6,22H4a2,2,0,0,1-2-2V10A2,2,0,0,1,4,8H6a2,2,0,0,1,2,2V20A2,2,0,0,1,6,22ZM4,10H4V20H6V10Z\"></path><path d=\"M5,7A3,3,0,1,1,8,4,3,3,0,0,1,5,7ZM5,3A1,1,0,1,0,6,4,1,1,0,0,0,5,3Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineLinkedinOutline(props) {
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