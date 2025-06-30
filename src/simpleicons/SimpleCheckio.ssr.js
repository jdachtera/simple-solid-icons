import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>CheckiO</title>",
  _tmpl$2 = "<path d=\"M10.846 8.886L24 2.932v13.82L9.621 21.068 0 14.09l3.35-9.956 7.496 4.751v.001zm-4.582 2.067l3.923-1.768-6.065-3.85 2.142 5.618zm-5.393 2.44l4.842-2.187-2.179-5.717-2.662 7.904H.871zm22.526 2.54V4.256l-5.96 7.37 5.96 4.307zm-12.865 4.233l12.497-3.758-5.973-4.316-6.524 8.074zM.94 14.029l8.092 5.867-3.106-8.124L.94 14.029zm21.722-9.826c-5.085 2.296-10.163 4.6-15.25 6.895l9.445.284 5.805-7.178v-.001zM9.775 20.143l6.608-8.173-9.844-.29 3.236 8.462v.001z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCheckio(props) {
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