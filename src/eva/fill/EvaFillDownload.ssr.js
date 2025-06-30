import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>download</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"download\"><g id=\"download-2\" data-name=\"download\"><rect x=\"4\" y=\"18\" width=\"16\" height=\"2\" rx=\"1\" ry=\"1\"></rect><rect x=\"3\" y=\"17\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"translate(-13 23) rotate(-90)\"></rect><rect x=\"17\" y=\"17\" width=\"4\" height=\"2\" rx=\"1\" ry=\"1\" transform=\"translate(1 37) rotate(-90)\"></rect><path d=\"M12,15a1,1,0,0,1-.58-.18L7.42,12a1,1,0,0,1-.24-1.39,1,1,0,0,1,1.4-.24L12,12.76,15.4,10.2a1,1,0,0,1,1.2,1.6l-4,3A1,1,0,0,1,12,15Z\"></path><path d=\"M12,13a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0v8A1,1,0,0,1,12,13Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillDownload(props) {
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