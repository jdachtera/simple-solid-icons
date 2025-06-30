import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M87.48,380c1.2-4.38-1.43-10.47-3.94-14.86A42.63,42.63,0,0,0,81,361.34a199.81,199.81,0,0,1-33-110C47.64,139.09,140.72,48,255.82,48,356.2,48,440,117.54,459.57,209.85A199,199,0,0,1,464,251.49c0,112.41-89.49,204.93-204.59,204.93-18.31,0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14,31.14,0,0,0-11.13-2.07,30.7,30.7,0,0,0-12.08,2.43L81.5,462.78A15.92,15.92,0,0,1,76.84,464a9.61,9.61,0,0,1-9.58-9.74,15.85,15.85,0,0,1,.6-3.29Z\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px\"></path>",
  _tmpl$2 = "<circle cx=\"160\" cy=\"256\" r=\"32\"></circle>",
  _tmpl$3 = "<circle cx=\"256\" cy=\"256\" r=\"32\"></circle>",
  _tmpl$4 = "<circle cx=\"352\" cy=\"256\" r=\"32\"></circle>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonChatbubbleEllipsesOutline(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4)], true);
}