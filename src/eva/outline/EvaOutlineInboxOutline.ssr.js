import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>inbox</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"inbox\"><g id=\"inbox-2\" data-name=\"inbox\"><path d=\"M20.79,11.34,17.45,4.66A3,3,0,0,0,14.76,3H9.24A3,3,0,0,0,6.55,4.66L3.21,11.34a2,2,0,0,0-.21.9V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12.24A2,2,0,0,0,20.79,11.34ZM8.34,5.55A1,1,0,0,1,9.24,5h5.52a1,1,0,0,1,.9.55L18.38,11H16a1,1,0,0,0-1,1v3H9V12a1,1,0,0,0-1-1H5.62ZM18,19H6a1,1,0,0,1-1-1V13H7v3a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V13h2v5A1,1,0,0,1,18,19Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineInboxOutline(props) {
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