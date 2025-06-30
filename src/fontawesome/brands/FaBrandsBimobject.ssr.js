import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M416 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32zm-64 257.4c0 49.4-11.4 82.6-103.8 82.6h-16.9c-44.1 0-62.4-14.9-70.4-38.8h-.9V368H96V136h64v74.7h1.1c4.6-30.5 39.7-38.8 69.7-38.8h17.3c92.4 0 103.8 33.1 103.8 82.5v35zm-64-28.9v22.9c0 21.7-3.4 33.8-38.4 33.8h-45.3c-28.9 0-44.1-6.5-44.1-35.7v-19c0-29.3 15.2-35.7 44.1-35.7h45.3c35-.2 38.4 12 38.4 33.7z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsBimobject(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 448 512',
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