import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>settings</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"settings\"><g id=\"settings-2\" data-name=\"settings\"><circle cx=\"12\" cy=\"12\" r=\"1.5\"></circle><path d=\"M21.89,10.32,21.1,7.8a2.26,2.26,0,0,0-2.88-1.51l-.34.11a1.74,1.74,0,0,1-1.59-.26l-.11-.08a1.76,1.76,0,0,1-.69-1.43V4.35a2.37,2.37,0,0,0-.68-1.68A2.26,2.26,0,0,0,13.21,2H10.66A2.32,2.32,0,0,0,8.37,4.33v.24a1.94,1.94,0,0,1-.73,1.51l-.13.1a1.93,1.93,0,0,1-1.78.29,2.14,2.14,0,0,0-1.68.12A2.18,2.18,0,0,0,2.93,7.92l-.82,2.6a2.34,2.34,0,0,0,1.48,2.94l.16,0h0a1.83,1.83,0,0,1,1.12,1.22l.06.16a2.06,2.06,0,0,1-.23,1.86A2.37,2.37,0,0,0,5.19,20l2.07,1.57A2.25,2.25,0,0,0,8.61,22,2,2,0,0,0,9,22,2.25,2.25,0,0,0,10.47,21l.23-.33a1.8,1.8,0,0,1,1.43-.77,1.75,1.75,0,0,1,1.5.78l.12.17a2.24,2.24,0,0,0,3.22.53L19,19.86a2.38,2.38,0,0,0,.5-3.23l-.26-.38A2,2,0,0,1,19,14.6a1.89,1.89,0,0,1,1.21-1.28l.2-.07A2.36,2.36,0,0,0,21.89,10.32ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillSettings(props) {
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