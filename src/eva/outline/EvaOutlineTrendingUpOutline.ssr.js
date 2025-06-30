import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>trending-up</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"trending-up\"><g id=\"trending-up-2\" data-name=\"trending-up\"><path d=\"M21,7a.78.78,0,0,0,0-.21.64.64,0,0,0-.05-.17,1.1,1.1,0,0,0-.09-.14.75.75,0,0,0-.14-.17l0,0-.12-.07a.69.69,0,0,0-.19-.1l-.2,0A.7.7,0,0,0,20,6H15a1,1,0,0,0,0,2h2.83l-4,4.71L9.51,10.14a1,1,0,0,0-1.28.22l-5,6a1,1,0,0,0,.13,1.41A1,1,0,0,0,4,18a1,1,0,0,0,.77-.36L9.22,12.3l4.27,2.56a1,1,0,0,0,1.27-.21L19,9.7V12a1,1,0,0,0,2,0V7S21,7,21,7Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineTrendingUpOutline(props) {
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