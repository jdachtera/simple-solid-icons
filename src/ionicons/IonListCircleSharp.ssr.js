import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM192,335.5a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm0-71a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm0-72a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16v-16a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm176,151H212.67v-32H368Zm0-71H212.67v-32H368Zm0-72H212.67v-32H368Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonListCircleSharp(props) {
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
  }), () => _$ssr(_tmpl$), true);
}