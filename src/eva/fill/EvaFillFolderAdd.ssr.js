import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>folder-add</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"folder-add\"><g id=\"folder-add-2\" data-name=\"folder-add\"><path d=\"M19.5,7.05h-7L9.87,3.87A1,1,0,0,0,9.1,3.5H4.5A2.47,2.47,0,0,0,2,5.93V18.07A2.47,2.47,0,0,0,4.5,20.5h15A2.47,2.47,0,0,0,22,18.07V9.48A2.47,2.47,0,0,0,19.5,7.05ZM14,15H13v1a1,1,0,0,1-2,0V15H10a1,1,0,0,1,0-2h1V12a1,1,0,0,1,2,0v1h1a1,1,0,0,1,0,2Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillFolderAdd(props) {
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