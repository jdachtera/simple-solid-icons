import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>pricetags</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"pricetags\"><g id=\"pricetags-2\" data-name=\"pricetags\"><path d=\"M12.87,22a1.84,1.84,0,0,1-1.29-.53L5.17,15.05a1,1,0,0,1-.29-.61L4,5.09a1,1,0,0,1,.29-.8A1,1,0,0,1,5.09,4l9.35.88a1,1,0,0,1,.61.29l6.42,6.41a1.82,1.82,0,0,1,0,2.57l-7.32,7.32A1.82,1.82,0,0,1,12.87,22Zm-6-8.11,6,6,7.05-7.05-6-6L6.11,6.11Z\"></path><circle cx=\"10.5\" cy=\"10.5\" r=\"1.5\"></circle></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlinePricetagsOutline(props) {
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