import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M384,512H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384a64.07,64.07,0,0,1,64,64V448A64.07,64.07,0,0,1,384,512ZM128,32A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32Z\"></path>",
  _tmpl$2 = "<path d=\"M384,0a64.07,64.07,0,0,1,64,64V448a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384M128,480H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32H128A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32m0-16a16,16,0,0,1-16-16V64a16,16,0,0,1,16-16H384a16,16,0,0,1,16,16V448a16,16,0,0,1-16,16Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonTabletPortrait(props) {
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