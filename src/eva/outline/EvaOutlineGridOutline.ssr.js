import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>grid</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"grid\"><g id=\"grid-2\" data-name=\"grid\"><path d=\"M9,3H5A2,2,0,0,0,3,5V9a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V5A2,2,0,0,0,9,3ZM5,9V5H9V9Z\"></path><path d=\"M19,3H15a2,2,0,0,0-2,2V9a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM15,9V5h4V9Z\"></path><path d=\"M9,13H5a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V15A2,2,0,0,0,9,13ZM5,19V15H9v4Z\"></path><path d=\"M19,13H15a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V15A2,2,0,0,0,19,13Zm-4,6V15h4v4Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineGridOutline(props) {
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