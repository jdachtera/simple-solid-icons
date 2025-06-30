import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M368,32H144A112.12,112.12,0,0,0,32,144V368A112.12,112.12,0,0,0,144,480H368A112.12,112.12,0,0,0,480,368V144A112.12,112.12,0,0,0,368,32Zm36.21,178-33.32,39.21A41.76,41.76,0,0,1,339,264.05a42.32,42.32,0,0,1-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47,10.47-60.69,19.25a41.86,41.86,0,0,1-54.2-8.46L107.79,210a50.48,50.48,0,0,1,4.49-70.27C140.12,114.38,187.65,84.16,256,84.16s115.88,30.22,143.72,55.57A50.48,50.48,0,0,1,404.21,210Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonScale(props) {
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