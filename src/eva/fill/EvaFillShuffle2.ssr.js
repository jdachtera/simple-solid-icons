import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>shuffle-2</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"shuffle-2\"><g id=\"shuffle-2-2\" data-name=\"shuffle-2\"><path d=\"M18.71,14.29a1,1,0,0,0-1.42,1.42l.29.29H16a4,4,0,0,1,0-8h1.59l-.3.29a1,1,0,0,0,0,1.42A1,1,0,0,0,18,10a1,1,0,0,0,.71-.29l2-2A1,1,0,0,0,21,7a1,1,0,0,0-.29-.71l-2-2a1,1,0,0,0-1.42,1.42l.29.29H16a6,6,0,0,0-5,2.69A6,6,0,0,0,6,6H4A1,1,0,0,0,4,8H6a4,4,0,0,1,0,8H4a1,1,0,0,0,0,2H6a6,6,0,0,0,5-2.69A6,6,0,0,0,16,18h1.59l-.3.29a1,1,0,0,0,0,1.42A1,1,0,0,0,18,20a1,1,0,0,0,.71-.29l2-2A1,1,0,0,0,21,17a1,1,0,0,0-.29-.71Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillShuffle2(props) {
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