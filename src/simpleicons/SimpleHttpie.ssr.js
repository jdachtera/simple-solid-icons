import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>HTTPie</title>",
  _tmpl$2 = "<path d=\"M7.28 0C4.4 0 1.992 2.279 1.933 5.155a5.263 5.263 0 0 0 5.26 5.358h4.223a.306.306 0 0 1 .122.584l-6.47 2.835a5.263 5.263 0 0 0-3.135 4.85C1.953 21.683 4.368 24 7.273 24h2.212c2.922 0 5.357-2.345 5.35-5.267a5.263 5.263 0 0 0-3.29-4.867.303.303 0 0 1-.007-.556l7.402-3.246a5.263 5.263 0 0 0 3.128-4.846C22.047 2.317 19.626.003 16.724.003z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleHttpie(props) {
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