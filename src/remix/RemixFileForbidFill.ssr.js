import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M21 11.6736C20.0907 11.2417 19.0736 11 18 11C14.134 11 11 14.134 11 18C11 19.4872 11.4638 20.8662 12.2547 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16L21 7V11.6736ZM18 23C15.2386 23 13 20.7614 13 18C13 15.2386 15.2386 13 18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23ZM16.7066 20.7076C17.0982 20.895 17.5369 21 18 21C19.6569 21 21 19.6569 21 18C21 17.5369 20.895 17.0982 20.7076 16.7066L16.7066 20.7076ZM15.2924 19.2934L19.2934 15.2924C18.9018 15.105 18.4631 15 18 15C16.3431 15 15 16.3431 15 18C15 18.4631 15.105 18.9018 15.2924 19.2934Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixFileForbidFill(props) {
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
  }), () => _$ssr(_tmpl$), true);
}