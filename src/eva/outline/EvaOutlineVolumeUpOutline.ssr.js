import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>volume-up</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"volume-up\"><g id=\"volume-up-2\" data-name=\"volume-up\"><path d=\"M18.28,8.37a1,1,0,1,0-1.56,1.26,4,4,0,0,1,0,4.74A1,1,0,0,0,17.5,16a1,1,0,0,0,.78-.37A6,6,0,0,0,18.28,8.37Z\"></path><path d=\"M19.64,5.23a1,1,0,1,0-1.28,1.54A6.8,6.8,0,0,1,21,12a6.8,6.8,0,0,1-2.64,5.23,1,1,0,0,0-.13,1.41A1,1,0,0,0,19,19a1,1,0,0,0,.64-.23A8.75,8.75,0,0,0,23,12,8.75,8.75,0,0,0,19.64,5.23Z\"></path><path d=\"M15,3.12a1,1,0,0,0-1,0L7.52,7.57h-5a1,1,0,0,0-1,1v6.86a1,1,0,0,0,1,1h5l6.41,4.4a1.06,1.06,0,0,0,.57.17,1,1,0,0,0,1-1V4A1,1,0,0,0,15,3.12Zm-1.47,15L8.4,14.6a1,1,0,0,0-.57-.17H3.5V9.57H7.83A1,1,0,0,0,8.4,9.4l5.1-3.5Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineVolumeUpOutline(props) {
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