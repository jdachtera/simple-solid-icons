import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Wondershare</title>",
  _tmpl$2 = "<path d=\"M16.216 17.814 7.704 9.368l.02-.02c.391.239.91.19 1.249-.147l3.041-3.016 7.241 7.184c.397.394.402 1.029.005 1.426l-3.044 3.019Zm-5.253-3.017-3.03 3.017L0 9.915l3.746-3.73 7.217 7.187a1.005 1.005 0 0 1 0 1.425ZM24 9.913l-3.725 3.727L16 9.367l.02-.021c.388.239.903.19 1.239-.146l3.014-3.015L24 9.913Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWondershare(props) {
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