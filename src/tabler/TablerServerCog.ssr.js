import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z\"></path>",
  _tmpl$3 = "<path d=\"M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5\"></path>",
  _tmpl$4 = "<path d=\"M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path>",
  _tmpl$5 = "<path d=\"M18 14.5v1.5\"></path>",
  _tmpl$6 = "<path d=\"M18 20v1.5\"></path>",
  _tmpl$7 = "<path d=\"M21.032 16.25l-1.299 .75\"></path>",
  _tmpl$8 = "<path d=\"M16.27 19l-1.3 .75\"></path>",
  _tmpl$9 = "<path d=\"M14.97 16.25l1.3 .75\"></path>",
  _tmpl$0 = "<path d=\"M19.733 19l1.3 .75\"></path>",
  _tmpl$1 = "<path d=\"M7 8v.01\"></path>",
  _tmpl$10 = "<path d=\"M7 16v.01\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerServerCog(props) {
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