import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>pricetags</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"pricetags\"><g id=\"pricetags-2\" data-name=\"pricetags\"><path d=\"M21.47,11.58,15.05,5.17a1,1,0,0,0-.61-.29L5.09,4a1,1,0,0,0-.8.29,1,1,0,0,0-.29.8l.88,9.35a1,1,0,0,0,.29.61l6.41,6.42a1.84,1.84,0,0,0,1.29.53,1.82,1.82,0,0,0,1.28-.53l7.32-7.32a1.82,1.82,0,0,0,0-2.57Zm-9.91,0a1.5,1.5,0,1,1,0-2.12A1.49,1.49,0,0,1,11.56,11.56Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillPricetags(props) {
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