import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M380.79,144.05C321.69,145.7,273.67,193.76,272,252.86a111.64,111.64,0,0,0,30.36,79.77A2,2,0,0,1,301,336H211a2,2,0,0,1-1.44-3.37A111.64,111.64,0,0,0,240,252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12,112.12,0,0,0,16,255.53C15.75,317.77,67,368,129.24,368H382.76C445,368,496.25,317.77,496,255.53A112.12,112.12,0,0,0,380.79,144.05Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonRecording(props) {
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