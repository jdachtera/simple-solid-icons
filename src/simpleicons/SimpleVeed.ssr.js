import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>VEED</title>",
  _tmpl$2 = "<path d=\"m23.9847 3.44845-6.4707 15.8711a2.41415 2.41415 0 0 1-2.23542 1.50241H8.73883a2.4138 2.4138 0 0 1-2.23388-1.5005L.01467 3.44846a.196.196 0 0 1 .18143-.27042h6.5505a.3923.3923 0 0 1 .36707.25392l4.90577 13.08297 4.8655-13.08144c.05678-.15342.20368-.25545.36708-.25545h6.55164c.13924 0 .23398.14115.18181.26965z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleVeed(props) {
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