import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>BentoML</title>",
  _tmpl$2 = "<path d=\"M16.3 11a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zm-4.4 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zM5.67 0a1.2 1.2 0 0 0-.815.318L.386 4.444A1.2 1.2 0 0 0 0 5.325V22.4A1.6 1.6 0 0 0 1.6 24h17.048a1.2 1.2 0 0 0 .911-.42l4.152-4.843a1.2 1.2 0 0 0 .289-.781V1.6A1.6 1.6 0 0 0 22.4 0ZM6 .6h16.2a1.2 1.2 0 0 1 1.2 1.2v15.8a1.6 1.6 0 0 1-1.6 1.6H6A1.2 1.2 0 0 1 4.8 18V1.8A1.2 1.2 0 0 1 6 .6Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBentoml(props) {
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