import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>KuCoin</title>",
  _tmpl$2 = "<path d=\"m7.928 11.996 7.122 7.122 4.49-4.49a2.004 2.004 0 0 1 2.865 0 2.004 2.004 0 0 1 0 2.865l-5.918 5.918a2.058 2.058 0 0 1-2.883 0l-8.541-8.542v5.07a2.034 2.034 0 1 1-4.07 0V4.043a2.034 2.034 0 1 1 4.07 0v5.088L13.604.589a2.058 2.058 0 0 1 2.883 0l5.918 5.918c.785.803.785 2.088 0 2.865-.804.785-2.089.785-2.865 0l-4.49-4.49zM15.05 9.96a2.038 2.038 0 0 0-2.053 2.035c0 1.133.902 2.052 2.035 2.052a2.038 2.038 0 0 0 2.053-2.035v-.018a2.07 2.07 0 0 0-2.035-2.034z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleKucoin(props) {
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