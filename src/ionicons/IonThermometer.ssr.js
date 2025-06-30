import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M320,287.18V81c0-35.12-27.89-64.42-63-64.95a64.08,64.08,0,0,0-65,64V287.18a8,8,0,0,1-3.18,6.37A113.48,113.48,0,0,0,144,384a112,112,0,0,0,224,0,113.48,113.48,0,0,0-44.82-90.45A8,8,0,0,1,320,287.18ZM254.07,432a48,48,0,0,1-22-89.54,16,16,0,0,0,8-13.84V112.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,112V328.58a16.18,16.18,0,0,0,8.15,13.94A48,48,0,0,1,254.07,432Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonThermometer(props) {
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