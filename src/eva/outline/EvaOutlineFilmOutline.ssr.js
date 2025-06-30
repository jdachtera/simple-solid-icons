import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>film</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"film\"><g id=\"film-2\" data-name=\"film\"><path d=\"M18.26,3H5.74A2.74,2.74,0,0,0,3,5.74V18.26A2.74,2.74,0,0,0,5.74,21H18.26A2.74,2.74,0,0,0,21,18.26V5.74A2.74,2.74,0,0,0,18.26,3ZM7,11H5V9H7ZM5,13H7v2H5ZM9,5h6V19H9Zm10,6H17V9h2Zm-2,2h2v2H17Zm2-7.26V7H17V5h1.26A.74.74,0,0,1,19,5.74ZM5.74,5H7V7H5V5.74A.74.74,0,0,1,5.74,5ZM5,18.26V17H7v2H5.74A.74.74,0,0,1,5,18.26Zm14,0a.74.74,0,0,1-.74.74H17V17h2Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineFilmOutline(props) {
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