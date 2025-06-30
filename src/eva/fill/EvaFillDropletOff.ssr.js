import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>droplet-off</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"droplet-off\"><g id=\"droplet-off-2\" data-name=\"droplet-off\"><path d=\"M19,16.14A7.73,7.73,0,0,0,17.34,8L12.78,3.31A1,1,0,0,0,12.07,3h0a1,1,0,0,0-.72.3L8.74,5.92Z\"></path><path d=\"M6,8.82a7.73,7.73,0,0,0,.64,9.9A7.44,7.44,0,0,0,11.92,21h0a7.34,7.34,0,0,0,4.64-1.6Z\"></path><path d=\"M20.71,19.29l-16-16A1,1,0,0,0,3.29,4.71l16,16a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillDropletOff(props) {
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