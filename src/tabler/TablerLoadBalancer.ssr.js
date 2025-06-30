import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"></path>",
  _tmpl$3 = "<path d=\"M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\"></path>",
  _tmpl$4 = "<path d=\"M12 16v3\"></path>",
  _tmpl$5 = "<path d=\"M12 10v-7\"></path>",
  _tmpl$6 = "<path d=\"M9 6l3 -3l3 3\"></path>",
  _tmpl$7 = "<path d=\"M14.894 12.227l6.11 -2.224\"></path>",
  _tmpl$8 = "<path d=\"M17.159 8.21l3.845 1.793l-1.793 3.845\"></path>",
  _tmpl$9 = "<path d=\"M9.101 12.214l-6.075 -2.211\"></path>",
  _tmpl$0 = "<path d=\"M6.871 8.21l-3.845 1.793l1.793 3.845\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerLoadBalancer(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0)], true);
}