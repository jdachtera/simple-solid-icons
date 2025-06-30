import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<polyline points=\"304 96 416 96 416 208\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></polyline>",
  _tmpl$2 = "<line x1=\"405.77\" y1=\"106.2\" x2=\"111.98\" y2=\"400.02\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></line>",
  _tmpl$3 = "<polyline points=\"208 416 96 416 96 304\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></polyline>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonResizeSharp(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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