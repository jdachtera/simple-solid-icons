import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>volume-down</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"volume-down\"><g id=\"volume-down-2\" data-name=\"volume-down\"><path d=\"M20.78,8.37a1,1,0,1,0-1.56,1.26,4,4,0,0,1,0,4.74A1,1,0,0,0,20,16a1,1,0,0,0,.78-.37A6,6,0,0,0,20.78,8.37Z\"></path><path d=\"M16.47,3.12a1,1,0,0,0-1,0L9,7.57H4a1,1,0,0,0-1,1v6.86a1,1,0,0,0,1,1H9l6.41,4.4A1.06,1.06,0,0,0,16,21a1,1,0,0,0,1-1V4A1,1,0,0,0,16.47,3.12ZM15,18.1,9.9,14.6a1,1,0,0,0-.57-.17H5V9.57H9.33A1,1,0,0,0,9.9,9.4L15,5.9Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineVolumeDownOutline(props) {
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