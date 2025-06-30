import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<rect x=\"336\" y=\"336\" width=\"80\" height=\"80\"></rect>",
  _tmpl$2 = "<rect x=\"272\" y=\"272\" width=\"64\" height=\"64\"></rect>",
  _tmpl$3 = "<rect x=\"416\" y=\"416\" width=\"64\" height=\"64\"></rect>",
  _tmpl$4 = "<rect x=\"432\" y=\"272\" width=\"48\" height=\"48\"></rect>",
  _tmpl$5 = "<rect x=\"272\" y=\"432\" width=\"48\" height=\"48\"></rect>",
  _tmpl$6 = "<rect x=\"336\" y=\"96\" width=\"80\" height=\"80\"></rect>",
  _tmpl$7 = "<path d=\"M480,240H272V32H480ZM316,196H436V76H316Z\"></path>",
  _tmpl$8 = "<rect x=\"96\" y=\"96\" width=\"80\" height=\"80\"></rect>",
  _tmpl$9 = "<path d=\"M240,240H32V32H240ZM76,196H196V76H76Z\"></path>",
  _tmpl$0 = "<rect x=\"96\" y=\"336\" width=\"80\" height=\"80\"></rect>",
  _tmpl$1 = "<path d=\"M240,480H32V272H240ZM76,436H196V316H76Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonQrCodeSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8), _$ssr(_tmpl$9), _$ssr(_tmpl$0), _$ssr(_tmpl$1)], true);
}