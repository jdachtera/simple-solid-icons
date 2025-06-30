import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>",
  _tmpl$2 = "<path d=\"M17 17v4h1a2 2 0 1 0 0 -4h-1z\"></path>",
  _tmpl$3 = "<path d=\"M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5\"></path>",
  _tmpl$4 = "<path d=\"M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\"></path>",
  _tmpl$5 = "<path d=\"M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3\"></path>",
  _tmpl$6 = "<path d=\"M9 11h4\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerAutomaticGearbox(props) {
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