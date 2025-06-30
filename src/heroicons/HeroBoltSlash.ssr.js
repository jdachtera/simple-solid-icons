import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M11.4123 15.6549L9.75 21.75L13.4949 17.7376M9.25736 13.5H3.75L6.40873 10.6514M8.4569 8.4569L14.25 2.25L12 10.5H20.25L15.5431 15.5431M8.4569 8.4569L3 3M8.4569 8.4569L15.5431 15.5431M15.5431 15.5431L21 21\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: heroicons | License: MIT (<https://github.com/tailwindlabs/heroicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function HeroBoltSlash(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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