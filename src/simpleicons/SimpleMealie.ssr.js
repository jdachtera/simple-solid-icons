import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Mealie</title>",
  _tmpl$2 = "<path d=\"M6.619 13.59 1.444 8.427c-1.925-1.939-1.925-5.063 0-6.989l8.666 8.642-3.491 3.51m6.551-.42 8.51 8.49-1.76 1.74-8.48-8.48-8.502 8.48-1.741-1.74L13.12 9.739l-.25-.272a2.448 2.448 0 0 1 0-3.472L18.23.6l1.14 1.135-3.99 4.024 1.18 1.161 3.99-4.012 1.15 1.136-4.01 4 1.15 1.189 4.03-4.017L24 6.377l-5.4 5.353c-.95.96-2.51.96-3.46 0l-.27-.25z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMealie(props) {
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