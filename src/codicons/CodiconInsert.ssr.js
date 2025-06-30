import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 1L15 2V6L14 7L6 7L5 6L5 2L6 1L14 1ZM14 2L6 2L6 6L14 6L14 2Z\"></path>",
  _tmpl$2 = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 9L15 10V14L14 15L6 15L5 14L5 10L6 9L14 9ZM14 10L6 10L6 14L14 14L14 10Z\"></path>",
  _tmpl$3 = "<path d=\"M1 6.39268L2.61414 8.00682L1 9.62096L1.69352 10.3141L4 8.00682L1.69352 5.69995L1 6.39268Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconInsert(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}