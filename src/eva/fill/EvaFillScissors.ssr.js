import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>scissors</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"scissors\"><g id=\"scissors-2\" data-name=\"scissors\"><path d=\"M20.21,5.71a1,1,0,1,0-1.42-1.42L12.51,10.6,9.21,7.29h0A3,3,0,0,0,9.5,6a3,3,0,1,0-3,3,3,3,0,0,0,1.29-.3h0L11.1,12l-3.29,3.3A3,3,0,0,0,6.5,15a3,3,0,1,0,3,3,3,3,0,0,0-.29-1.26ZM6.5,7a1,1,0,1,1,1-1A1,1,0,0,1,6.5,7Zm0,12a1,1,0,1,1,1-1A1,1,0,0,1,6.5,19Z\"></path><path d=\"M15.21,13.29a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillScissors(props) {
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