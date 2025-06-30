import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Valve</title>",
  _tmpl$2 = "<path d=\"M0 8.579v6.842h24V8.58zm1.8 1.415h.793l.776 3.044.76-3.044h.836l-1.227 4.029H3zm5.488 0h1.084l1.145 4.034h-.814l-.27-1.007H7.228s-.21.81-.254.99c-.242.017-.83 0-.83 0zm4.184 0h.792v3.352h1.69v.677h-2.482zm3.45 0h.816l.776 3.005.754-3.005h.815l-1.222 4.034h-.716zm4.828 0h1.69v.522h-1.084v.584h.99v.523h-.99v.6h1.084v.523h-1.69zm-11.902.68l-.426 1.702h.89z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleValve(props) {
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