import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<polyline points=\"160 368 32 256 160 144\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px\"></polyline>",
  _tmpl$2 = "<polyline points=\"352 368 480 256 352 144\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px\"></polyline>",
  _tmpl$3 = "<polyline points=\"192 288.1 256 352 320 288.1\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px\"></polyline>",
  _tmpl$4 = "<line x1=\"256\" y1=\"160\" x2=\"256\" y2=\"336.03\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCodeDownloadSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4)], true);
}