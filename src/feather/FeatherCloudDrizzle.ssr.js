import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line>",
  _tmpl$2 = "<line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line>",
  _tmpl$3 = "<line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line>",
  _tmpl$4 = "<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line>",
  _tmpl$5 = "<line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line>",
  _tmpl$6 = "<line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line>",
  _tmpl$7 = "<path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: feather | License: MIT (<https://github.com/feathericons/feather/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function FeatherCloudDrizzle(props) {
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