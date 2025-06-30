import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M3 3c0 2 1 3 4 3c2 0 3 1 3 3\"></path>",
  _tmpl$3 = "<path d=\"M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3\"></path>",
  _tmpl$4 = "<path d=\"M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6\"></path>",
  _tmpl$5 = "<path d=\"M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0\"></path>",
  _tmpl$6 = "<path d=\"M17 3c0 1.333 -.333 2.333 -1 3\"></path>",
  _tmpl$7 = "<path d=\"M7 3c0 1.333 .333 2.333 1 3\"></path>",
  _tmpl$8 = "<path d=\"M7 6c-2.667 .667 -4.333 1.667 -5 3\"></path>",
  _tmpl$9 = "<path d=\"M17 6c2.667 .667 4.333 1.667 5 3\"></path>",
  _tmpl$0 = "<path d=\"M8.5 10l-1.5 -1\"></path>",
  _tmpl$1 = "<path d=\"M15.5 10l1.5 -1\"></path>",
  _tmpl$10 = "<path d=\"M12 15h.01\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerDeer(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1), _$ssr(_tmpl$10)], true);
}