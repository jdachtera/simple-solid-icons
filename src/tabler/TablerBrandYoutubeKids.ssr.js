import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M18.608 17.75l-3.9 .268h-.027a13.83 13.83 0 0 0 -3.722 .828l-2.511 .908a4.111 4.111 0 0 1 -3.287 -.216a3.82 3.82 0 0 1 -1.98 -2.527l-1.376 -6.05a3.669 3.669 0 0 1 .536 -2.86a3.964 3.964 0 0 1 2.489 -1.661l11.25 -2.354c2.137 -.448 4.247 .85 4.713 2.9l1.403 6.162a3.677 3.677 0 0 1 -.697 3.086a4.007 4.007 0 0 1 -2.89 1.512v.002z\"></path>",
  _tmpl$3 = "<path d=\"M9 10l1.208 5l4.292 -4z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandYoutubeKids(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}