import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>google</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"google\"><g id=\"google-2\" data-name=\"google\"><path d=\"M17.5,14A5.51,5.51,0,0,1,13,17.93,6.15,6.15,0,0,1,6,12.48,6,6,0,0,1,12,6a6.12,6.12,0,0,1,2.27.44.5.5,0,0,0,.64-.21l1.44-2.65a.52.52,0,0,0-.23-.7A10,10,0,0,0,2,12.29,10.12,10.12,0,0,0,11.57,22,10,10,0,0,0,22,12.52c0-.2,0-1.35,0-2a.51.51,0,0,0-.5-.5h-9a.5.5,0,0,0-.5.5v3a.5.5,0,0,0,.5.5h5\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillGoogle(props) {
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