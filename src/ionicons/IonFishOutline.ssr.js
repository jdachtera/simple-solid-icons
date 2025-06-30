import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"32\" stroke-linejoin=\"round\" d=\"M240,152c-50.71,12.21-94.15,52.31-120.3,73.43a261.14,261.14,0,0,0-23.81-19.58C59.53,179.29,16,176,16,176s11.37,51.53,41.36,79.83C27.37,284.14,16,335.67,16,335.67s43.53-3.29,79.89-29.85a259.18,259.18,0,0,0,23.61-19.41C145.6,307.55,189.24,347.75,240,360l-16,56c39.43-6.67,78.86-35.51,94.72-48.25C448,362,496,279,496,256c0-22-48-106-176.89-111.73C303.52,131.78,263.76,102.72,224,96Z\"></path>",
  _tmpl$2 = "<circle cx=\"416\" cy=\"239.99\" r=\"16\"></circle>",
  _tmpl$3 = "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"32\" stroke-linecap=\"round\" stroke-miterlimit=\"20\" d=\"M378.37,356a199.22,199.22,0,0,1,0-200\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonFishOutline(props) {
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