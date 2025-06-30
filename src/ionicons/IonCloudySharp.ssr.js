import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M376,432H116c-32.37,0-60.23-8.57-80.59-24.77C12.24,388.78,0,361.39,0,328c0-61.85,48.44-95.34,97.75-102.64,6.52-41.18,24-76.4,51.11-102.46A153.57,153.57,0,0,1,256,80c35.5,0,68.24,11.69,94.68,33.8a156.42,156.42,0,0,1,45.22,63.61c30.26,4.81,57.45,17.18,77.38,35.36C498.61,235.88,512,267.42,512,304c0,36-14.38,68.88-40.49,92.59C446.36,419.43,412.44,432,376,432Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCloudySharp(props) {
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