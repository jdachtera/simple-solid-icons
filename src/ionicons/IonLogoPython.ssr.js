import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M314,36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09,311.09,0,0,0-51.66,4.38c-45.74,8-54.07,24.7-54.07,55.54V128H256v16H107.62C66.06,144,32.33,193.67,32,255.12c0,.29,0,.58,0,.88a162.91,162.91,0,0,0,3.13,32c9.29,46.28,38.23,80,72.49,80H128V314c0-31.3,20.84-59.95,55-66.1l9.87-1.23H314a56.05,56.05,0,0,0,15.06-2A52.48,52.48,0,0,0,368,193.68V91.92C368,63,343.32,41.19,314,36.38ZM194.93,105.5a20.37,20.37,0,1,1,20.3-20.3A20.29,20.29,0,0,1,194.93,105.5Z\"></path>",
  _tmpl$2 = "<path d=\"M475.28,217c-10.7-42.61-38.41-73-70.9-73H386.67v47.45c0,39.57-26,68.22-57.74,73.13a63.54,63.54,0,0,1-9.69.75H198.08a60,60,0,0,0-15.23,1.95C160.54,273.14,144,291.7,144,315.77V417.54c0,29,29.14,46,57.73,54.31,34.21,9.95,71.48,11.75,112.42,0,27.19-7.77,53.85-23.48,53.85-54.31V384H256V368H404.38c29.44,0,54.95-24.93,67.45-61.31A156.83,156.83,0,0,0,480,256,160.64,160.64,0,0,0,475.28,217ZM316.51,404a20.37,20.37,0,1,1-20.3,20.3A20.29,20.29,0,0,1,316.51,404Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonLogoPython(props) {
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