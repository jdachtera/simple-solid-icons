import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<line x1=\"192\" y1=\"448\" x2=\"320\" y2=\"448\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$2 = "<path d=\"M384,208v32c0,70.4-57.6,128-128,128h0c-70.4,0-128-57.6-128-128V208\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></path>",
  _tmpl$3 = "<line x1=\"256\" y1=\"368\" x2=\"256\" y2=\"448\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></line>",
  _tmpl$4 = "<path d=\"M256,64a63.68,63.68,0,0,0-64,64V239c0,35.2,29,65,64,65s64-29,64-65V128C320,92,292,64,256,64Z\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMicOutline(props) {
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