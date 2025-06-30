import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Kit</title>",
  _tmpl$2 = "<path d=\"m3.5 11.633-2.434 2.408V8.687a.53.53 0 0 0-.533-.527.53.53 0 0 0-.533.527v6.624a.528.528 0 0 0 .532.526.533.533 0 0 0 .377-.153l2.974-2.939 2.974 2.94a.535.535 0 0 0 .754 0 .522.522 0 0 0 0-.746l-2.974-2.938L7.61 9.06a.522.522 0 0 0 0-.745.538.538 0 0 0-.753 0l-3.344 3.307c-.003 0-.005.003-.007.005l-.007.006v-.001zm8.826 4.206a.53.53 0 0 1-.533-.526V8.688a.53.53 0 0 1 .533-.528.53.53 0 0 1 .533.528v6.624a.53.53 0 0 1-.533.526v.001zm7.257-6.624v6.098c0 .29.238.526.532.526a.53.53 0 0 0 .533-.526V9.215h2.818A.53.53 0 0 0 24 8.688a.53.53 0 0 0-.533-.527h-6.702a.53.53 0 0 0-.533.527.53.53 0 0 0 .533.527h2.819-.001z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleKit(props) {
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