import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M68.4,192A20.38,20.38,0,0,0,48,212.2a17.87,17.87,0,0,0,.8,5.5L100.5,400a40.46,40.46,0,0,0,39.1,29.5H372.4A40.88,40.88,0,0,0,411.7,400l51.7-182.3.6-5.5A20.38,20.38,0,0,0,443.6,192H68.4ZM261.72,352.07A42.07,42.07,0,1,1,304,310,42.27,42.27,0,0,1,261.72,352.07Z\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></path>",
  _tmpl$2 = "<polyline points=\"160 192 256 64 352 192\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px\"></polyline>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBasketOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}