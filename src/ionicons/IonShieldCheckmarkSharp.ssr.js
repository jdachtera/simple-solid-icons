import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M479.07,111.36l-.79-12.53-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3-6.59,3C168.69,69.88,132.58,81.1,46.08,96.62L33.72,98.83l-.79,12.53c-3.85,61.11,4.36,118.05,24.43,169.24A349.47,349.47,0,0,0,129,393.11c53.47,56.73,110.24,81.37,121.07,85.73l6,2.41,6-2.41c10.83-4.36,67.6-29,121.07-85.73A349.47,349.47,0,0,0,454.64,280.6C474.71,229.41,482.92,172.47,479.07,111.36Zm-252.91,216L153.37,256l22.4-22.86,48.47,47.49L334.37,153.43l24.2,20.94Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonShieldCheckmarkSharp(props) {
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