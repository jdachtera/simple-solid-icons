import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>checkmark-square</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"checkmark-square\"><g id=\"checkmark-square-2\" data-name=\"checkmark-square\"><path d=\"M20,11.83a1,1,0,0,0-1,1V18.4a.6.6,0,0,1-.6.6H5.6a.6.6,0,0,1-.6-.6V5.6A.6.6,0,0,1,5.6,5h9.57a1,1,0,1,0,0-2H5.6A2.61,2.61,0,0,0,3,5.6V18.4A2.61,2.61,0,0,0,5.6,21H18.4A2.61,2.61,0,0,0,21,18.4V12.83A1,1,0,0,0,20,11.83Z\"></path><path d=\"M10.72,11a1,1,0,0,0-1.44,1.38l2.22,2.33a1,1,0,0,0,.72.31h0a1,1,0,0,0,.72-.3l6.78-7a1,1,0,1,0-1.44-1.4l-6.05,6.26Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineCheckmarkSquareOutline(props) {
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