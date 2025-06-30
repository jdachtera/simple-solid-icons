import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"48\" y=\"368\" width=\"416\" height=\"32\"></rect>",
  _tmpl$2 = "<rect x=\"80\" y=\"416\" width=\"352\" height=\"32\"></rect>",
  _tmpl$3 = "<path d=\"M480,176a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64H32a96.11,96.11,0,0,1,96,96v16H384V336a96.11,96.11,0,0,1,96-96h16V176ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z\"></path>",
  _tmpl$4 = "<path d=\"M96,80V64H16v80H32A64.07,64.07,0,0,0,96,80Z\"></path>",
  _tmpl$5 = "<path d=\"M32,272H16v80H96V336A64.07,64.07,0,0,0,32,272Z\"></path>",
  _tmpl$6 = "<path d=\"M480,144h16V64H416V80A64.07,64.07,0,0,0,480,144Z\"></path>",
  _tmpl$7 = "<path d=\"M416,336v16h80V272H480A64.07,64.07,0,0,0,416,336Z\"></path>",
  _tmpl$8 = "<circle cx=\"256\" cy=\"208\" r=\"64\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCashSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}