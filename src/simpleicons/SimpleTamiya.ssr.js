import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Tamiya</title>",
  _tmpl$2 = "<path d=\"M0 6.408v4.27h4.496l1.36-4.27Zm5.856 0 1.398 4.27h4.496v-4.27Zm5.894 4.27-3.627 2.644 1.398 4.27h2.23Zm-2.23 6.914-3.664-2.645-3.627 2.645Zm-7.291 0 1.398-4.27L0 10.678v6.914zM12.25 6.408v4.27h4.496l1.36-4.27zm5.856 0 1.398 4.27H24v-4.27ZM24 10.678l-3.627 2.644 1.398 4.27H24Zm-2.23 6.914-3.664-2.645-3.627 2.645zm-7.29 0 1.397-4.27-3.627-2.644v6.914z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleTamiya(props) {
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