import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>MapLibre</title>",
  _tmpl$2 = "<path d=\"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm0 3.19c2.937 0 5.371 2.265 5.371 5.035 0 4.111-4.364 7.635-5.035 8.138-.084 0-.084.084-.084.084-.084.084-.168.084-.168.084s-.168 0-.168-.084l-.084-.084c-.84-.503-5.203-3.943-5.203-8.138 0-2.77 2.434-5.036 5.371-5.036zm0 2.601c-1.427 0-2.602 1.173-2.602 2.684 0 1.51 1.175 2.685 2.602 2.685 1.427 0 2.602-1.175 2.602-2.685S13.427 5.79 12 5.79zM8.979 17.287h6.042a.66.66 0 0 1 .67.672v2.014a.66.66 0 0 1-.67.67H8.98a.66.66 0 0 1-.67-.67v-2.014a.66.66 0 0 1 .67-.672zm.755 1.258v.924h4.448v-.924H9.734z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMaplibre(props) {
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