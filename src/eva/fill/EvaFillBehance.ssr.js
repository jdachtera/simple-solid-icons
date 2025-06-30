import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>behance</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"behance\"><g id=\"behance-2\" data-name=\"behance\"><path d=\"M14.76,11.19a1,1,0,0,0-1,1.09h2.06A1,1,0,0,0,14.76,11.19Z\"></path><path d=\"M9.49,12.3H8.26v1.94h1c1,0,1.44-.33,1.44-1S10.24,12.3,9.49,12.3Z\"></path><path d=\"M10.36,10.52c0-.53-.35-.85-.95-.85H8.26v1.74h.85C10,11.41,10.36,11.09,10.36,10.52Z\"></path><path d=\"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM9.7,15.2H7V8.7H9.7c1.17,0,1.94.61,1.94,1.6a1.4,1.4,0,0,1-1.12,1.43v0A1.52,1.52,0,0,1,12,13.37C12,14.53,11,15.2,9.7,15.2Zm3.55-6h3v.5h-3ZM17,13.05h-3.3v.14a1.07,1.07,0,0,0,1.09,1.19.9.9,0,0,0,1-.63H17a2,2,0,0,1-2.17,1.55A2.15,2.15,0,0,1,12.47,13v-.44a2.11,2.11,0,0,1,2.28-2.25A2.12,2.12,0,0,1,17,12.58Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillBehance(props) {
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