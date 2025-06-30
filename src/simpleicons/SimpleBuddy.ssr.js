import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Buddy</title>",
  _tmpl$2 = "<path d=\"M21.7 5.307L12.945.253a1.892 1.892 0 00-1.891 0L2.299 5.306a1.892 1.892 0 00-.945 1.638v10.11c0 .675.36 1.3.945 1.637l8.756 5.056a1.892 1.892 0 001.89 0l8.756-5.055c.585-.338.945-.962.945-1.638V6.945c0-.675-.36-1.3-.945-1.638zm-7.45 7.753l-3.805 3.804-1.351-1.351 3.804-3.805-3.804-3.806 1.35-1.35 3.805 3.805 1.351 1.35-1.35 1.353z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBuddy(props) {
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