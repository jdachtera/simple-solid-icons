import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>compass</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"compass\"><g id=\"compass-2\" data-name=\"compass\"><polygon points=\"10.8 13.21 12.49 12.53 13.2 10.79 11.51 11.47 10.8 13.21\"></polygon><path d=\"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.93,7.42-1.75,4.26a1,1,0,0,1-.55.55l-4.21,1.7A1,1,0,0,1,9,16a1,1,0,0,1-.71-.31l-.05,0,0,0a1,1,0,0,1-.18-1l1.75-4.26a1,1,0,0,1,.55-.55l4.21-1.7a1,1,0,0,1,1.1.25A1,1,0,0,1,15.93,9.42Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillCompass(props) {
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