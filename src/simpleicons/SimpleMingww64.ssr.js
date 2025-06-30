import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>MinGW-w64</title>",
  _tmpl$2 = "<path d=\"m -3e-4,9.3955 4.187,-4.187 4.1869,4.187 -4.187,4.187 z m 0,10.417 4.187,-4.1869 4.1869,4.187 -4.187,4.1869 z m 5.2086,-5.2085 4.1869,-4.187 4.187,4.187 -4.187,4.187 z m 0,-10.417 L 9.3953,0 13.5822,4.187 9.3952,8.3738 Z m 5.2085,5.2084 4.187,-4.1869 4.1869,4.187 -4.187,4.1869 z M 15.6253,4.187 19.8123,0 l 4.1869,4.187 -4.187,4.1869 z m -5.208,15.626 4.187,-4.1869 4.1869,4.187 L 14.6042,24 Z m 5.2086,-5.2085 4.187,-4.187 4.1868,4.187 -4.1869,4.187 z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMingww64(props) {
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