import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Zilch</title>",
  _tmpl$2 = "<path d=\"M4.421 6.149c3.292-2.011 6.584-4.036 9.862-6.046a.702.702 0 0 1 .83.073c1.312 1.18 2.637 2.36 3.948 3.54a.694.694 0 0 1 .175.815 1737.248 1737.248 0 0 1-4.341 9.338.61.61 0 0 0 .408.845c1.427.335 2.855.656 4.283.991a.546.546 0 0 1 .204.976c-3.234 2.375-6.483 4.749-9.717 7.124a.986.986 0 0 1-1.136.029l-4.633-3.016a.691.691 0 0 1-.248-.888c1.326-2.812 2.666-5.623 3.992-8.421a.78.78 0 0 0-.146-.859 802.196 802.196 0 0 0-3.583-3.569c-.277-.262-.219-.729.102-.932Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleZilch(props) {
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