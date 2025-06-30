import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>log-out</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"log-out\"><g id=\"log-out-2\" data-name=\"log-out\"><path d=\"M7,6A1,1,0,0,0,7,4H5A1,1,0,0,0,4,5V19a1,1,0,0,0,1,1H7a1,1,0,0,0,0-2H6V6Z\"></path><path d=\"M20.82,11.42,18,7.42a1,1,0,0,0-1.39-.24,1,1,0,0,0-.24,1.4L18.09,11,18,11H10a1,1,0,0,0,0,2h8l-1.8,2.4a1,1,0,0,0,.2,1.4,1,1,0,0,0,.6.2,1,1,0,0,0,.8-.4l3-4A1,1,0,0,0,20.82,11.42Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineLogOutOutline(props) {
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