import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>person-done</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"person-done\"><g id=\"person-done-2\" data-name=\"person-done\"><path d=\"M21.66,4.25a1,1,0,0,0-1.41.09L18.38,6.49l-.63-.71a1,1,0,0,0-1.5,1.33l1.39,1.56a1,1,0,0,0,.75.33h0a1,1,0,0,0,.74-.34l2.61-3A1,1,0,0,0,21.66,4.25Z\"></path><path d=\"M10,11A4,4,0,1,0,6,7,4,4,0,0,0,10,11Z\"></path><path d=\"M16,21a1,1,0,0,0,1-1A7,7,0,0,0,3,20a1,1,0,0,0,1,1\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillPersonDone(props) {
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