import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>skip-forward</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"skip-forward\"><g id=\"skip-forward-2\" data-name=\"skip-forward\"><path d=\"M16,6a1,1,0,0,0-1,1v3.82l-.14-.15L9.76,6.46A2.1,2.1,0,0,0,7.55,6.2a1.76,1.76,0,0,0-1,1.59v8.42a1.76,1.76,0,0,0,1,1.59,2.23,2.23,0,0,0,.91.2,2.06,2.06,0,0,0,1.3-.46l5.1-4.21.14-.15V17a1,1,0,0,0,2,0V7A1,1,0,0,0,16,6ZM8.5,15.91V8l4.82,4Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineSkipForwardOutline(props) {
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