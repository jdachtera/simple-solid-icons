import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>KeePassXC</title>",
  _tmpl$2 = "<path d=\"M12 0C5.378 0 0 5.378 0 12c0 6.623 5.378 12 12 12 6.623 0 12-5.377 12-12 0-6.622-5.377-12-12-12zm0 .791a11.203 11.203 0 0 1 11.209 11.21A11.202 11.202 0 0 1 12 23.208 11.203 11.203 0 0 1 .791 12 11.203 11.203 0 0 1 12.001.791zm0 1.871a9.356 9.356 0 0 0-1.705.162A1.746 1.746 0 0 0 12 4.95a1.746 1.746 0 0 0 1.706-2.126A9.342 9.342 0 0 0 12 2.662zM7.2 4a9.338 9.338 0 0 0-4.54 8 9.338 9.338 0 0 0 18.677 0 9.338 9.338 0 0 0-4.54-7.998 4.888 4.888 0 0 1-2.701 5.365l-.12 2.066 1.482 1.483-1.483 1.482.989.989-.989.988.12 1.857L12 20.328l-2.096-2.096V9.367A4.89 4.89 0 0 1 7.2 4zm3.4 6.543v6.99h.7v-6.99z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleKeepassxc(props) {
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