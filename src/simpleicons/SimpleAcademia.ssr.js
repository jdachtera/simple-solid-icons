import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Academia</title>",
  _tmpl$2 = "<path d=\"M22.033 21.18L13.77.459H7.869l1.049 2.623L1.836 21.18C1.574 22.098.787 22.23 0 22.361v1.18h6.82v-1.18C4.984 22.23 3.934 21.967 4.721 20c.131-.131.656-1.574 1.311-3.41h8.393l1.18 3.016c.131.525.262.918.262 1.311 0 1.049-.918 1.443-2.623 1.443v1.18H24v-1.18c-.918-.13-1.705-.393-1.967-1.18zM6.82 14.361a363.303 363.303 0 0 0 3.279-8.525l3.41 8.525H6.82z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAcademia(props) {
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