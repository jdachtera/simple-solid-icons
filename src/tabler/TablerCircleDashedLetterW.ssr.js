import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M9 8l1 8l2 -5l2 5l1 -8\"></path>",
  _tmpl$3 = "<path d=\"M8.56 3.69a9 9 0 0 0 -2.92 1.95\"></path>",
  _tmpl$4 = "<path d=\"M3.69 8.56a9 9 0 0 0 -.69 3.44\"></path>",
  _tmpl$5 = "<path d=\"M3.69 15.44a9 9 0 0 0 1.95 2.92\"></path>",
  _tmpl$6 = "<path d=\"M8.56 20.31a9 9 0 0 0 3.44 .69\"></path>",
  _tmpl$7 = "<path d=\"M15.44 20.31a9 9 0 0 0 2.92 -1.95\"></path>",
  _tmpl$8 = "<path d=\"M20.31 15.44a9 9 0 0 0 .69 -3.44\"></path>",
  _tmpl$9 = "<path d=\"M20.31 8.56a9 9 0 0 0 -1.95 -2.92\"></path>",
  _tmpl$0 = "<path d=\"M15.44 3.69a9 9 0 0 0 -3.44 -.69\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerCircleDashedLetterW(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0)], true);
}