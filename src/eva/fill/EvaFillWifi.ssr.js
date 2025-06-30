import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>wifi</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"wifi\"><g id=\"wifi-2\" data-name=\"wifi\"><circle cx=\"12\" cy=\"19\" r=\"1\"></circle><path d=\"M12,14a5,5,0,0,0-3.47,1.4,1,1,0,1,0,1.39,1.44,3.08,3.08,0,0,1,4.16,0,1,1,0,1,0,1.39-1.44A5,5,0,0,0,12,14Z\"></path><path d=\"M12,9a9,9,0,0,0-6.47,2.75A1,1,0,0,0,7,13.14a7,7,0,0,1,10.08,0,1,1,0,0,0,.71.3,1,1,0,0,0,.72-1.69A9,9,0,0,0,12,9Z\"></path><path d=\"M21.72,7.93a14,14,0,0,0-19.44,0A1,1,0,0,0,3.66,9.37a12,12,0,0,1,16.68,0,1,1,0,0,0,.69.28,1,1,0,0,0,.72-.31A1,1,0,0,0,21.72,7.93Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillWifi(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
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