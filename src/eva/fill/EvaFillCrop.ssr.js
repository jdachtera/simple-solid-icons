import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>crop</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"crop\"><g id=\"crop-2\" data-name=\"crop\"><path d=\"M21,16H18V8.56A2.56,2.56,0,0,0,15.44,6H8V3A1,1,0,0,0,6,3V6H3A1,1,0,0,0,3,8H6v7.44A2.56,2.56,0,0,0,8.56,18H16v3a1,1,0,0,0,2,0V18h3a1,1,0,0,0,0-2ZM8.56,16A.56.56,0,0,1,8,15.44V8h7.44a.56.56,0,0,1,.56.56V16Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillCrop(props) {
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