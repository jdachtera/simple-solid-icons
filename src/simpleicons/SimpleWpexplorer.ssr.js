import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>WPExplorer</title>",
  _tmpl$2 = "<path d=\"M24 12A12 12 0 1 1 12 0a12.008 12.008 0 0 1 12 12Zm-1.5 0A10.5 10.5 0 1 0 12 22.5 10.516 10.516 0 0 0 22.5 12ZM7.542 5.841l4.074 1.739-1.739 4.073L5.8 9.914l1.742-4.073Zm5.158 7.926 2.185 4.406H14.2l-2.343-4.687-2.295 4.687h-.656l2.4-5.01-1.046-.441.282-.656 3.215 1.364-.281.67Zm-.553-5.451 3.216 1.378-1.378 3.2-3.2-1.364 1.364-3.215Zm3.764 2.011 2.56 1.082-1.1 2.546-2.545-1.083 1.082-2.545Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWpexplorer(props) {
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