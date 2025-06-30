import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"32\" y=\"96\" width=\"64\" height=\"368\" rx=\"16\" ry=\"16\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></rect>",
  _tmpl$2 = "<line x1=\"112\" y1=\"224\" x2=\"240\" y2=\"224\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$3 = "<line x1=\"112\" y1=\"400\" x2=\"240\" y2=\"400\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$4 = "<rect x=\"112\" y=\"160\" width=\"128\" height=\"304\" rx=\"16\" ry=\"16\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></rect>",
  _tmpl$5 = "<rect x=\"256\" y=\"48\" width=\"96\" height=\"416\" rx=\"16\" ry=\"16\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></rect>",
  _tmpl$6 = "<path d=\"M422.46,96.11l-40.4,4.25c-11.12,1.17-19.18,11.57-17.93,23.1l34.92,321.59c1.26,11.53,11.37,20,22.49,18.84l40.4-4.25c11.12-1.17,19.18-11.57,17.93-23.1L445,115C443.69,103.42,433.58,94.94,422.46,96.11Z\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonLibraryOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6)], true);
}