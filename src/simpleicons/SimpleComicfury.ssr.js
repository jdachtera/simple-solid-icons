import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>ComicFury</title>",
  _tmpl$2 = "<path d=\"m0 6.959 1.899-3.256 2.725 2.736 2.973-.204L9.3 3.297l2.213 2.693 8.655-.252.406-1.085L24 5.128v5.268l-11.248 3.526-1.085 6.781H0V6.959zm2.195-.748L1.041 8.137l1.75 1.748 1.133-1.948-1.729-1.726zm7.409-.448L8.48 7.546l1.224 1.598 1.137-1.766-1.237-1.615zm3.901 3.751-1.992.349.997 2.025.995-2.374zm3.319-.565-1.992.348.996 2.025.996-2.373zm3.228-.611-1.991.349.996 2.025.995-2.374zm3.183-.566-1.992.349.996 2.025.996-2.374z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleComicfury(props) {
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