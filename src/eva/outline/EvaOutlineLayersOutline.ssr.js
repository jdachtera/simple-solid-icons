import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>layers</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"layers\"><g id=\"layers-2\" data-name=\"layers\"><path d=\"M21,11.35a1,1,0,0,0-.61-.86l-2.15-.92,2.26-1.3a1,1,0,0,0,.5-.92,1,1,0,0,0-.61-.86l-8-3.41a1,1,0,0,0-.78,0l-8,3.41A1,1,0,0,0,3,7.35a1,1,0,0,0,.5.92l2.26,1.3-2.15.92a1,1,0,0,0-.61.86,1,1,0,0,0,.5.92l2.26,1.3-2.15.92a1,1,0,0,0-.61.86,1,1,0,0,0,.5.92l8,4.6a1,1,0,0,0,1,0l8-4.6a1,1,0,0,0,.5-.92,1,1,0,0,0-.61-.86l-2.15-.92,2.26-1.3A1,1,0,0,0,21,11.35ZM12,5.09l5.76,2.45L12,10.85,6.24,7.54Zm-.5,7.78a1,1,0,0,0,1,0l3.57-2,1.69.72L12,14.85,6.24,11.54l1.69-.72Zm6.26,2.67L12,18.85,6.24,15.54l1.69-.72,3.57,2.05a1,1,0,0,0,1,0l3.57-2.05Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineLayersOutline(props) {
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