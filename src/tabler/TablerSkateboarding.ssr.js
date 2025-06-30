import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M16 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\"></path>",
  _tmpl$3 = "<path d=\"M5.5 15h3.5l.75 -1.5\"></path>",
  _tmpl$4 = "<path d=\"M14 19v-5l-2.5 -3l2.5 -4\"></path>",
  _tmpl$5 = "<path d=\"M8 8l3 -1h4l1 3h3\"></path>",
  _tmpl$6 = "<path d=\"M17.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z\" fill=\"currentColor\"></path>",
  _tmpl$7 = "<path d=\"M3 18c0 .552 .895 1 2 1h14c1.105 0 2 -.448 2 -1\"></path>",
  _tmpl$8 = "<path d=\"M6.5 21a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z\" fill=\"currentColor\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerSkateboarding(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}