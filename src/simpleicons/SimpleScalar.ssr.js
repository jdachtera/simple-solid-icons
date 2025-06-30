import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Scalar</title>",
  _tmpl$2 = "<path d=\"M14.044 0c.243 0 .486.202.486.486v5.423l3.804-3.845c.202-.202.526-.202.688 0l2.914 2.914c.162.162.202.486 0 .648v.04L18.09 9.47h5.423c.284 0 .486.203.486.486v4.088a.468.468 0 0 1-.486.486h-5.423l3.845 3.804c.162.202.202.526 0 .688l-2.914 2.914c-.162.162-.486.202-.648 0h-.04L14.53 18.09v5.423a.468.468 0 0 1-.486.486H9.956a.468.468 0 0 1-.486-.486v-2.833c0-.89.365-1.74.972-2.388l5.261-5.261a1.466 1.466 0 0 0 0-2.064l-5.22-5.221A3.4 3.4 0 0 1 9.47 3.359V.486c0-.284.203-.486.486-.486h4.088ZM5.585 2.105h.04l8.864 8.863a1.466 1.466 0 0 1 0 2.064l-8.863 8.904c-.162.202-.486.202-.688 0l-2.874-2.833c-.162-.203-.202-.486 0-.688L5.91 14.53H.486A.468.468 0 0 1 0 14.043V9.956c0-.283.202-.486.486-.486h5.423L2.064 5.666a.548.548 0 0 1 0-.688l2.874-2.873a.421.421 0 0 1 .647 0Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleScalar(props) {
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