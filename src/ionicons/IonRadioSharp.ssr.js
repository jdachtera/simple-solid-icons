import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<ellipse cx=\"256\" cy=\"256\" rx=\"36\" ry=\"35.99\"></ellipse>",
  _tmpl$2 = "<path d=\"M188.4,350.8l-14.62-16.44a117.91,117.91,0,0,1,0-156.71l14.62-16.43,32.87,29.24-14.62,16.43a73.93,73.93,0,0,0,0,98.25l14.62,16.44Z\"></path>",
  _tmpl$3 = "<path d=\"M323.6,350.8l-32.89-29.22,14.62-16.44a73.93,73.93,0,0,0,0-98.25l-14.62-16.43,32.87-29.24,14.62,16.43a117.91,117.91,0,0,1,0,156.71Z\"></path>",
  _tmpl$4 = "<path d=\"M138.24,401.76l-15-16.06a189.85,189.85,0,0,1,0-259.4l15-16.07,32.14,30.05-15,16.06a145.88,145.88,0,0,0,0,199.32l15,16.06Z\"></path>",
  _tmpl$5 = "<path d=\"M373.76,401.76l-32.14-30,15-16.06a145.88,145.88,0,0,0,0-199.32l-15-16.06,32.14-30,15,16.07a189.85,189.85,0,0,1,0,259.4Z\"></path>",
  _tmpl$6 = "<path d=\"M430.73,447l-32.79-29.33,14.66-16.39a218.2,218.2,0,0,0,0-290.56L397.93,94.34,430.72,65l14.67,16.39a262.18,262.18,0,0,1,0,349.22Z\"></path>",
  _tmpl$7 = "<path d=\"M81.27,447,66.6,430.61a262.18,262.18,0,0,1,0-349.22L81.28,65l32.79,29.34L99.39,110.72a218.2,218.2,0,0,0,0,290.56l14.66,16.39Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonRadioSharp(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}