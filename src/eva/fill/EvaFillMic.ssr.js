import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>mic</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"mic\"><g id=\"mic-2\" data-name=\"mic\"><path d=\"M12,15a4,4,0,0,0,4-4V6A4,4,0,0,0,8,6v5A4,4,0,0,0,12,15Z\"></path><path d=\"M19,11a1,1,0,0,0-2,0A5,5,0,0,1,7,11a1,1,0,0,0-2,0,7,7,0,0,0,6,6.92V20H8.89a.89.89,0,0,0-.89.89v.22a.89.89,0,0,0,.89.89h6.22a.89.89,0,0,0,.89-.89v-.22a.89.89,0,0,0-.89-.89H13V17.92A7,7,0,0,0,19,11Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillMic(props) {
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