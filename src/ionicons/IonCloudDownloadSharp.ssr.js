import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M472.7,189.5c-15.76-10-36.21-16.79-58.59-19.54-6.65-39.1-24.22-72.52-51.27-97.26C334.15,46.45,296.21,32,256,32c-35.35,0-68,11.08-94.37,32a149.7,149.7,0,0,0-45.29,60.42c-30.67,4.32-57,14.61-76.71,30C13.7,174.83,0,203.56,0,237.6,0,305,55.92,352,136,352H240V208h32V352H396c72.64,0,116-34.24,116-91.6C512,230.35,498.41,205.83,472.7,189.5Z\"></path>",
  _tmpl$2 = "<polygon points=\"240 419.42 191.98 371 169.37 394 256 480 342.63 394 320.02 371 272 419.42 272 352 240 352 240 419.42\"></polygon>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCloudDownloadSharp(props) {
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