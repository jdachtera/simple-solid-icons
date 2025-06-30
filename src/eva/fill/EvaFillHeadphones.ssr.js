import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>headphones</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"headphones\"><g id=\"headphones-2\" data-name=\"headphones\"><path d=\"M12,2A10.2,10.2,0,0,0,2,12.37V17a4,4,0,1,0,4-4,3.91,3.91,0,0,0-2,.56V12.37A8.2,8.2,0,0,1,12,4a8.2,8.2,0,0,1,8,8.37v1.19A3.91,3.91,0,0,0,18,13a4,4,0,1,0,4,4V12.37A10.2,10.2,0,0,0,12,2Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillHeadphones(props) {
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