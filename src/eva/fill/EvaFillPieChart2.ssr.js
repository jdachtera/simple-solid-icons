import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>pie-chart-2</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"pie-chart-2\"><g id=\"pie-chart-2-2\" data-name=\"pie-chart-2\"><path d=\"M14.5,10.33h6.67A.83.83,0,0,0,22,9.5,7.5,7.5,0,0,0,14.5,2a.83.83,0,0,0-.83.83V9.5A.83.83,0,0,0,14.5,10.33Zm.83-6.6a5.83,5.83,0,0,1,4.94,4.94H15.33Z\"></path><path d=\"M21.08,12H12.93a.91.91,0,0,1-.91-.91V2.92A.92.92,0,0,0,11,2,10,10,0,1,0,22,13,.92.92,0,0,0,21.08,12Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillPieChart2(props) {
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