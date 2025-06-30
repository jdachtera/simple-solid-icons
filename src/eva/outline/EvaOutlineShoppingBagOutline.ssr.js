import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>shopping-bag</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"shopping-bag\"><g id=\"shopping-bag-2\" data-name=\"shopping-bag\"><path d=\"M20.12,6.71,17.29,3.88A3,3,0,0,0,15.17,3H8.83a3,3,0,0,0-2.12.88L3.88,6.71A3,3,0,0,0,3,8.83V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V8.83A3,3,0,0,0,20.12,6.71Zm-12-1.42A1.05,1.05,0,0,1,8.83,5h6.34a1.05,1.05,0,0,1,.71.29L17.59,7H6.41ZM18,19H6a1,1,0,0,1-1-1V9H19v9A1,1,0,0,1,18,19Z\"></path><path d=\"M15,11a1,1,0,0,0-1,1,2,2,0,0,1-4,0,1,1,0,0,0-2,0,4,4,0,0,0,8,0A1,1,0,0,0,15,11Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineShoppingBagOutline(props) {
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