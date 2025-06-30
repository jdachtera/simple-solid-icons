import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>moon</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"moon\"><g id=\"moon-2\" data-name=\"moon\"><path d=\"M12.3,22h-.1a10.31,10.31,0,0,1-7.34-3.15,10.46,10.46,0,0,1-.26-14,10.13,10.13,0,0,1,4-2.74,1,1,0,0,1,1.06.22,1,1,0,0,1,.24,1,8.4,8.4,0,0,0,1.94,8.81,8.47,8.47,0,0,0,8.83,1.94,1,1,0,0,1,1.27,1.29A10.16,10.16,0,0,1,19.6,19,10.28,10.28,0,0,1,12.3,22ZM7.46,4.92A7.93,7.93,0,0,0,6.09,6.14a8.44,8.44,0,0,0,.2,11.32A8.29,8.29,0,0,0,12.22,20h.08a8.34,8.34,0,0,0,6.78-3.49A10.37,10.37,0,0,1,7.46,4.92Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineMoonOutline(props) {
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