import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Fozzy</title>",
  _tmpl$2 = "<path d=\"M14.494 20.48l-.998-2.095 5.787-11.273c.897 1.396 1.496 3.092 1.496 4.888 0 3.99-2.594 7.382-6.285 8.48zM12.998.029C5.615-.471-.47 5.615.028 12.998c.5 5.786 5.188 10.475 10.974 10.973 7.383.5 13.468-5.586 12.97-12.969C23.471 5.216 18.783.527 12.997.03zM7.112 4.717c1.297-.897 2.793-1.396 4.39-1.496L8.807 8.409 7.112 4.717zm3.491 7.383l4.19-8.38c.798.3 1.497.598 2.195 1.097L11.9 14.793 10.603 12.1zM3.221 12c0-1.796.599-3.492 1.496-4.888l6.485 13.667C6.712 20.38 3.22 16.589 3.22 12z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFozzy(props) {
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