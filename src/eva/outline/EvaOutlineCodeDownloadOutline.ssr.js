import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<defs></defs>",
  _tmpl$2 = "<title>code-download</title>",
  _tmpl$3 = "<g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"code-download\"><g id=\"code-download-2\" data-name=\"code-download\"><path d=\"M4.29,12,8.77,6.64A1,1,0,1,0,7.23,5.36l-5,6a1,1,0,0,0,0,1.27l4.83,6a1,1,0,0,0,.78.37,1,1,0,0,0,.78-1.63Z\"></path><path d=\"M21.78,11.37,17,5.37a1,1,0,0,0-1.56,1.26L19.71,12l-4.48,5.37a1,1,0,0,0,.13,1.41A1,1,0,0,0,16,19a1,1,0,0,0,.77-.36l5-6A1,1,0,0,0,21.78,11.37Z\"></path><path d=\"M15.72,11.41a1,1,0,0,0-1.41,0L13,12.64V8a1,1,0,0,0-2,0v4.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3A1,1,0,0,0,12,16a1,1,0,0,0,.69-.28l3-2.9A1,1,0,0,0,15.72,11.41Z\"></path></g></g></g>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineCodeDownloadOutline(props) {
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