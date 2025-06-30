import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>BentoBox</title>",
  _tmpl$2 = "<path d=\"m7.406 3.821 2.723-2.725a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29l-2.723 2.723-5.368-5.366Zm7.407 7.407 2.723-2.723a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29l-2.725 2.723-5.369-5.368h.003ZM0 11.228l2.723-2.723a3.74 3.74 0 0 1 5.29 0l.079.078a3.742 3.742 0 0 1 0 5.29l-2.724 2.723L0 11.228Zm7.406 7.406 2.723-2.723a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29L12.774 24l-5.368-5.366Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBentobox(props) {
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