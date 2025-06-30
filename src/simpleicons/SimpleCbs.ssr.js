import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>CBS</title>",
  _tmpl$2 = "<path d=\"M12 24C5.314 24 .068 18.587.068 11.949.068 5.413 5.314 0 12 0s11.932 5.413 11.932 11.949C23.932 18.587 18.686 24 12 24zm0-5.106c5.452 0 9.36-3.473 11.109-6.945C21.875 9.294 18.172 5.106 12 5.106c-5.452 0-9.36 3.37-11.109 6.843C2.537 15.42 6.548 18.894 12 18.894zm0-.613c-3.497 0-6.377-2.86-6.377-6.332S8.503 5.617 12 5.617s6.377 2.86 6.377 6.332c0 3.574-2.88 6.332-6.377 6.332Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCbs(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}