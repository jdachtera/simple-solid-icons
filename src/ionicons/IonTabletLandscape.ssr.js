import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M512,128V384a64.07,64.07,0,0,1-64,64H64A64.07,64.07,0,0,1,0,384V128A64.07,64.07,0,0,1,64,64H448A64.07,64.07,0,0,1,512,128ZM32,384a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32V128a32,32,0,0,0-32-32H64a32,32,0,0,0-32,32Z\"></path>",
  _tmpl$2 = "<path d=\"M0,128A64.07,64.07,0,0,1,64,64H448a64.07,64.07,0,0,1,64,64V384a64.07,64.07,0,0,1-64,64H64A64.07,64.07,0,0,1,0,384V128M480,384V128a32,32,0,0,0-32-32H64a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32m-16,0a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H448a16,16,0,0,1,16,16V384Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonTabletLandscape(props) {
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