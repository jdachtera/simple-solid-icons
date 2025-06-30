import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>TeamViewer</title>",
  _tmpl$2 = "<path d=\"m20.17 11.998-6.225-3.401.685 2.144H9.37l.684-2.145L3.829 12l6.225 3.404-.683-2.147h5.26l-.686 2.147zM20.448 0H3.553A3.553 3.553 0 0 0 .001 3.552v16.895A3.553 3.553 0 0 0 3.553 24h16.895A3.553 3.553 0 0 0 24 20.447V3.552A3.553 3.553 0 0 0 20.448 0zM12 21.646c-5.328 0-9.648-4.32-9.648-9.648 0-5.329 4.32-9.646 9.648-9.646S21.65 6.672 21.65 12s-4.32 9.648-9.649 9.648z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleTeamviewer(props) {
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