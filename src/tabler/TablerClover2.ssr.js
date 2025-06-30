import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M11 11l-3.397 -3.44a2.104 2.104 0 0 1 0 -2.95a2.04 2.04 0 0 1 2.912 0l.485 .39l.485 -.39a2.04 2.04 0 0 1 2.912 0a2.104 2.104 0 0 1 0 2.95l-3.397 3.44z\"></path>",
  _tmpl$3 = "<path d=\"M11 11l-3.397 3.44a2.104 2.104 0 0 0 0 2.95a2.04 2.04 0 0 0 2.912 0l.485 -.39l.485 .39a2.04 2.04 0 0 0 2.912 0a2.104 2.104 0 0 0 0 -2.95l-3.397 -3.44z\"></path>",
  _tmpl$4 = "<path d=\"M14.44 7.603a2.104 2.104 0 0 1 2.95 0a2.04 2.04 0 0 1 0 2.912l-.39 .485l.39 .485a2.04 2.04 0 0 1 0 2.912a2.104 2.104 0 0 1 -2.95 0\"></path>",
  _tmpl$5 = "<path d=\"M7.56 7.603a2.104 2.104 0 0 0 -2.95 0a2.04 2.04 0 0 0 0 2.912l.39 .485l-.39 .485a2.04 2.04 0 0 0 0 2.912a2.104 2.104 0 0 0 2.95 0\"></path>",
  _tmpl$6 = "<path d=\"M15 15l6 6\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerClover2(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6)], true);
}