import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>trash-2</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"trash-2\"><g id=\"trash-2-2\" data-name=\"trash-2\"><path d=\"M21,6H16V4.33A2.42,2.42,0,0,0,13.5,2h-3A2.42,2.42,0,0,0,8,4.33V6H3A1,1,0,0,0,3,8H4V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,4.33c0-.16.21-.33.5-.33h3c.29,0,.5.17.5.33V6H10ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V8H18Z\"></path><path d=\"M9,17a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v4A1,1,0,0,0,9,17Z\"></path><path d=\"M15,17a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v4A1,1,0,0,0,15,17Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineTrash2Outline(props) {
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