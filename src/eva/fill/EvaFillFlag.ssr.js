import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>flag</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"flag\"><g id=\"flag-2\" data-name=\"flag\"><path d=\"M19.27,4.68a1.79,1.79,0,0,0-1.6-.25,7.53,7.53,0,0,1-2.17.28,8.54,8.54,0,0,1-3.13-.78A10.15,10.15,0,0,0,8.5,3c-2.89,0-4,1-4.2,1.14a1,1,0,0,0-.3.72V20a1,1,0,0,0,2,0V15.7a6.28,6.28,0,0,1,2.5-.41,8.54,8.54,0,0,1,3.13.78A10.15,10.15,0,0,0,15.5,17,7.66,7.66,0,0,0,19,16.3a1.74,1.74,0,0,0,1-1.55V6.11A1.77,1.77,0,0,0,19.27,4.68Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillFlag(props) {
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