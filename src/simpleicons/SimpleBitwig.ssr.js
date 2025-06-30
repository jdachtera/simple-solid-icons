import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Bitwig</title>",
  _tmpl$2 = "<path d=\"M4.15 7.782a1.59 1.59 0 1 1 3.181 0 1.59 1.59 0 0 1-3.181 0zm5.741 1.591a1.59 1.59 0 1 0 0-3.181 1.59 1.59 0 0 0 0 3.181zm4.218 0a1.59 1.59 0 1 0 0-3.181 1.59 1.59 0 0 0 0 3.181zm4.15 0a1.59 1.59 0 1 0 0-3.181 1.59 1.59 0 0 0 0 3.181zM5.741 10.409a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm8.368 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm4.15 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm4.15 3.182a1.59 1.59 0 1 0 0-3.181 1.59 1.59 0 0 0 0 3.181zM1.591 10.409a1.591 1.591 0 1 0 0 3.182 1.591 1.591 0 0 0 0-3.182zm4.15 4.218a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm12.518 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm4.15 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181zm-20.818 0a1.59 1.59 0 1 0 0 3.181 1.59 1.59 0 0 0 0-3.181m8.3-4.218a1.591 1.591 0 1 0 0 3.182 1.591 1.591 0 0 0 0-3.182Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBitwig(props) {
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