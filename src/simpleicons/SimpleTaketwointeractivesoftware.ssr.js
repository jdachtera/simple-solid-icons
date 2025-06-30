import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Take-Two Interactive Software</title>",
  _tmpl$2 = "<path d=\"m17.012 16.776.417-.257 4.155-3.1c1.413-1.248 2.293-2.686 2.293-4.607-.006-3.849-3.037-5.771-6.614-5.771-1.663 0-3.122.447-4.283 1.256V2.852L0 2.86l.007 4.395 3.85-.008.016 13.886 5.355-.008-.016-13.886h1.443a7.97 7.97 0 0 0-.516 2.02l4.518.884c.076-1.376.547-3.102 2.219-3.102 1.101 0 1.753.832 1.753 1.87 0 1.557-1.305 2.653-2.4 3.592l-6.082 4.56.006 4.085 13.642-.016.205-4.371-6.988.015Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleTaketwointeractivesoftware(props) {
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