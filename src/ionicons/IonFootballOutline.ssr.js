import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<circle cx=\"256\" cy=\"256\" r=\"192\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></circle>",
  _tmpl$2 = "<polygon points=\"256 175.15 179.91 238.98 200 320 256 320 312 320 332.09 238.98 256 175.15\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></polygon>",
  _tmpl$3 = "<polyline points=\"332.09 238.98 384.96 216.58 410.74 143.32\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></polyline>",
  _tmpl$4 = "<line x1=\"447\" y1=\"269.97\" x2=\"384.96\" y2=\"216.58\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$5 = "<polyline points=\"179.91 238.98 127.04 216.58 101.26 143.32\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></polyline>",
  _tmpl$6 = "<line x1=\"65\" y1=\"269.97\" x2=\"127.04\" y2=\"216.58\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$7 = "<polyline points=\"256 175.15 256 117.58 320 74.94\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></polyline>",
  _tmpl$8 = "<line x1=\"192\" y1=\"74.93\" x2=\"256\" y2=\"117.58\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$9 = "<polyline points=\"312 320 340 368 312 439\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></polyline>",
  _tmpl$0 = "<line x1=\"410.74\" y1=\"368\" x2=\"342\" y2=\"368\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$1 = "<polyline points=\"200 320 172 368 200.37 439.5\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></polyline>",
  _tmpl$10 = "<line x1=\"101.63\" y1=\"368\" x2=\"172\" y2=\"368\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonFootballOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1), _$ssr(_tmpl$10)], true);
}