import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M384,32a64,64,0,0,0-57.67,91.73L255.5,204.55l-70.19-80.1A64,64,0,1,0,128,160c1.1,0,2.2,0,3.29-.08L224,265.7v94.91a64,64,0,1,0,64,0V264.56l91.78-104.71c1.39.09,2.8.15,4.22.15a64,64,0,0,0,0-128ZM96,96a32,32,0,1,1,32,32A32,32,0,0,1,96,96ZM256,448a32,32,0,1,1,32-32A32,32,0,0,1,256,448ZM384,128a32,32,0,1,1,32-32A32,32,0,0,1,384,128Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonGitNetworkSharp(props) {
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