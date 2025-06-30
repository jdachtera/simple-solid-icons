import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Depositphotos</title>",
  _tmpl$2 = "<path d=\"M12 24c5.119 0 9.061-3.942 9.061-9.06S17.119 5.88 12 5.88c-5.117 0-9.059 3.942-9.059 9.06S6.883 24 12 24Zm0-5.598c-1.954 0-3.461-1.508-3.461-3.462 0-1.955 1.507-3.462 3.461-3.462 1.955 0 3.462 1.507 3.462 3.462 0 1.954-1.507 3.462-3.462 3.462Zm2.634-12.241h6.161V0h-6.161v6.161Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleDepositphotos(props) {
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