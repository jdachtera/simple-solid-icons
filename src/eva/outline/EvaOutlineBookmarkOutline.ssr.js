import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>bookmark</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"bookmark\"><g id=\"bookmark-2\" data-name=\"bookmark\"><path d=\"M6.09,21.06a1,1,0,0,1-1-1L4.94,5.4A2.26,2.26,0,0,1,7.12,3.05L16.71,3a2.27,2.27,0,0,1,2.23,2.31l.14,14.66a1,1,0,0,1-.49.87,1,1,0,0,1-1,0l-5.7-3.16L6.6,20.91A1.2,1.2,0,0,1,6.09,21.06Zm5.76-5.55a1.11,1.11,0,0,1,.5.12l4.71,2.61L16.94,5.29c0-.2-.13-.34-.21-.33l-9.6.09c-.08,0-.19.13-.19.33l.12,12.9,4.28-2.63A1.06,1.06,0,0,1,11.85,15.51Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineBookmarkOutline(props) {
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