import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>folder</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"folder\"><g id=\"folder-2\" data-name=\"folder\"><path d=\"M19.5,20.5H4.5A2.47,2.47,0,0,1,2,18.07V5.93A2.47,2.47,0,0,1,4.5,3.5H9.1a1,1,0,0,1,.77.37l2.6,3.18h7A2.47,2.47,0,0,1,22,9.48v8.59A2.47,2.47,0,0,1,19.5,20.5ZM4,13.76v4.31a.46.46,0,0,0,.5.43h15a.46.46,0,0,0,.5-.43V9.48a.46.46,0,0,0-.5-.43H12a1,1,0,0,1-.77-.37L8.63,5.5H4.5a.46.46,0,0,0-.5.43Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineFolderOutline(props) {
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