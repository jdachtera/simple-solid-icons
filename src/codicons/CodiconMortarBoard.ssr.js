import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M15 5.66L8.18 3h-.36L1 5.66V12h1V7l2.31.9a4.35 4.35 0 0 0-.79 2.48c-.01.11-.01.22 0 .33v.11l.28.4L7.78 13h.41l3.94-1.81.28-.4v-.44a4.39 4.39 0 0 0-.78-2.47L15 6.57v-.91zm-3.52 4.68v.07L8 12l-3.5-1.6a.13.13 0 0 1 0-.06 3.44 3.44 0 0 1 .75-2.12l2.58 1h.36l2.56-1a3.4 3.4 0 0 1 .73 2.12zM8 8.25L2.52 6.12 8 4l5.48 2.14L8 8.25z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconMortarBoard(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
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
  }), () => _$ssr(_tmpl$), true);
}