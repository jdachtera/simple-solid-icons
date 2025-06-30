import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$2 = "<path d=\"M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$3 = "<path d=\"M416,416c30-46,48-91.43,48-160S446,143,416,96\" style=\"fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$4 = "<polygon points=\"125.65 176.1 32 176.1 32 335.9 125.65 335.9 256 440 256 72 125.65 176.1\"></polygon>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonVolumeHighSharp(props) {
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