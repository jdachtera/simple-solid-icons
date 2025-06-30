import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M103.48,224a71.64,71.64,0,0,0,44.76-15.66l41.5,16.89,6.82-12.63a39.15,39.15,0,0,1,4.32-6.37l14.22-14.42-41.17-24.94A72,72,0,1,0,103.48,224Zm0-112a40,40,0,1,1-40,40A40,40,0,0,1,103.48,112Z\"></path>",
  _tmpl$2 = "<path d=\"M480,169l-5.52-12.58c-4.48-10.42-14.74-16-32.78-17.85-10.12-1-26.95-1.24-49.69,3.81-20,4.45-122.14,28.2-164.95,58.62C206.81,215.39,203,234.67,200,250.16c-2.78,14.14-5,25.31-18,35-15,11.14-27.27,16.38-33.58,18.6a71.74,71.74,0,1,0,24.79,38ZM255.48,256a16,16,0,1,1,16-16A16,16,0,0,1,255.48,256Zm-152,144a40,40,0,1,1,40-40A40,40,0,0,1,103.48,400Z\"></path>",
  _tmpl$3 = "<path d=\"M343.79,259.87l-83.74,48.18,27.63,13.08,3.62,1.74C310,331.92,359.74,356,410.53,359c3.89.23,7.47.34,10.78.34C442,359.31,453,354,459.75,350L480,336Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCut(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}