import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M378.6 78.9c-2.8-.1-5.6-.2-8.5-.2l-264.1 0 143.2-72C256.6 2.3 268 0 279.6 0c13.5 0 29.4 9.2 37 16.8l62 62zM107.3 96.5l262.8 0c16 0 25.4 1.4 35.4 9.3L512 212.2 512 421l-79.3 .7L107.3 96.5zM96.5 373l0-262.2L420.3 434.6l.7 77.4-212.2 0-98.1-98.2 0 0C99.4 402.5 96.5 398.5 96.5 373zM78.7 105.3l0 267.7c0 3.3 .1 6.3 .2 9.1l-62-62C6.5 309.3 0 294.3 0 279.6c0-6.8 3.9-17.5 6.7-23.6l72-150.7z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsDartLang(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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