import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>RetroArch</title>",
  _tmpl$2 = "<path d=\"M6.84 5.76L8.4 7.68H5.28l-.72 2.88H2.64l.72-2.88H1.44L0 13.44h3.84l-.48 1.92h3.36L4.2 18.24h2.82l2.34-2.88h5.28l2.34 2.88h2.82l-2.52-2.88h3.36l-.48-1.92H24l-1.44-5.76h-1.92l.72 2.88h-1.92l-.72-2.88H15.6l1.56-1.92h-2.04l-1.68 1.92h-2.88L8.88 5.76zm.24 3.84H9v1.92H7.08zm7.925 0h1.92v1.92h-1.92Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRetroarch(props) {
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