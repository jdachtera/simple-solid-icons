import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Issuu</title>",
  _tmpl$2 = "<path d=\"M.996 0A.998.998 0 0 0 0 .996V12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0H.996zm11.17 3.582a8.333 8.333 0 0 1 8.254 8.41 8.333 8.333 0 0 1-8.41 8.252c-4.597-.045-8.296-3.81-8.254-8.41.045-4.6 3.81-8.296 8.41-8.252zm-.031 2.27a6.107 6.107 0 0 0-6.155 6.046 6.109 6.109 0 0 0 6.05 6.163 6.099 6.099 0 0 0 6.154-6.047 6.107 6.107 0 0 0-6.041-6.162h-.008zm-.02 3.013a3.098 3.098 0 0 1 3.063 3.123 3.088 3.088 0 0 1-3.121 3.06l.002-.001a3.091 3.091 0 0 1 .056-6.182z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleIssuu(props) {
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