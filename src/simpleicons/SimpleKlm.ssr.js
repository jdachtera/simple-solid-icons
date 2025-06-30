import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>KLM</title>",
  _tmpl$2 = "<path d=\"M6.75 13.034H4.5l-2.25 2.257v-2.257H0v6.018h2.25v-2.257l2.25 2.257h3l-3.375-3.385zm3 0H7.5v6.018h6v-1.518H9.75zm10.5 0l-1.125 3.385L18 13.034h-3.75v6.018h2.25v-4.514l1.5 4.514h2.25l1.5-4.514v4.514H24v-6.018zM10.5 9.649c.725 0 1.313-.589 1.313-1.316s-.588-1.317-1.313-1.317-1.312.589-1.312 1.317.587 1.316 1.312 1.316zm1.688-1.316c0 .727.588 1.316 1.312 1.316.725 0 1.313-.589 1.313-1.316s-.588-1.317-1.313-1.317-1.312.589-1.312 1.317zm2.999 0c0 .727.588 1.316 1.312 1.316.725 0 1.313-.589 1.313-1.316s-.588-1.317-1.313-1.317-1.312.589-1.312 1.317zm-6.375 0c0-.727-.588-1.317-1.313-1.317s-1.312.589-1.312 1.317.588 1.316 1.313 1.316 1.312-.589 1.312-1.316zM7.5 10.025h9v1.505h-9zm4.125-2.821h.75v-.752h.75V5.7h-.75v-.753h-.75V5.7h-.75v.752h.75z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleKlm(props) {
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