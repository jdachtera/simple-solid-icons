import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<polygon points=\"396.31 32 264 32 348.19 144.26 396.31 32\"></polygon>",
  _tmpl$2 = "<polygon points=\"115.69 32 163.81 144.26 248 32 115.69 32\"></polygon>",
  _tmpl$3 = "<polygon points=\"256 74.67 192 160 320 160 256 74.67\"></polygon>",
  _tmpl$4 = "<polygon points=\"422.95 51.06 376.26 160 488 160 422.95 51.06\"></polygon>",
  _tmpl$5 = "<polygon points=\"89.05 51.06 23 160 135.74 160 89.05 51.06\"></polygon>",
  _tmpl$6 = "<polygon points=\"146.68 192 24 192 246.8 480 247.33 480 146.68 192\"></polygon>",
  _tmpl$7 = "<polygon points=\"365.32 192 264.67 480 265.2 480 488 192 365.32 192\"></polygon>",
  _tmpl$8 = "<polygon points=\"329.39 192 182.61 192 256 400 329.39 192\"></polygon>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonDiamondSharp(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}