import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>",
  _tmpl$2 = "<line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line>",
  _tmpl$3 = "<line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line>",
  _tmpl$4 = "<line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line>",
  _tmpl$5 = "<line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line>",
  _tmpl$6 = "<line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line>",
  _tmpl$7 = "<line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: feather | License: MIT (<https://github.com/feathericons/feather/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function FeatherAperture(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}