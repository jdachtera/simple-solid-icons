import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Franprix</title>",
  _tmpl$2 = "<path d=\"M12 6.305c3.691 0 6.323-3.071 6.13-6.286-2.124-.17-5.069.791-6.13 3.79C10.939.81 7.993-.15 5.87.02 5.677 3.234 8.309 6.305 12 6.305m11.002 6.962c-.139-3.413-2.821-6.362-6.55-6.362-1.69 0-3.236.635-4.452 1.744-1.217-1.11-2.763-1.744-4.452-1.744-3.729 0-6.412 2.949-6.55 6.362C.758 19.19 5.913 24 12 24c6.087 0 11.242-4.81 11.002-10.733\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFranprix(props) {
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