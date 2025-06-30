import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Greasy Fork</title>",
  _tmpl$2 = "<path d=\"M5.89 2.227a.28.28 0 0 1 .266.076l5.063 5.062c.54.54.509 1.652-.031 2.192l8.771 8.77c1.356 1.355-.36 3.097-1.73 1.728l-8.772-8.77c-.54.54-1.651.571-2.191.031l-5.063-5.06c-.304-.304.304-.911.608-.608l3.714 3.713L7.59 8.297 3.875 4.582c-.304-.304.304-.911.607-.607l3.715 3.714 1.067-1.066L5.549 2.91c-.228-.228.057-.626.342-.683ZM12 0C5.374 0 0 5.375 0 12s5.374 12 12 12c6.625 0 12-5.375 12-12S18.625 0 12 0Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGreasyfork(props) {
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