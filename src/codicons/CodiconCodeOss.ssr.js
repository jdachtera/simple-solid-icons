import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M5 2H6V13H5V2Z\"></path>",
  _tmpl$2 = "<path d=\"M7 3H11V4H7V3Z\"></path>",
  _tmpl$3 = "<path d=\"M9 5H13V6H9V5Z\"></path>",
  _tmpl$4 = "<path d=\"M9 7H13V8H9V7Z\"></path>",
  _tmpl$5 = "<path d=\"M9 9H13V10H9V9Z\"></path>",
  _tmpl$6 = "<path d=\"M7 11H11V12H7V11Z\"></path>",
  _tmpl$7 = "<path d=\"M2.00012 1L1.00012 2V7H2.00012V2H14.0001V13H2.00012V7H1.00012V13L2.00012 14H14.0001L15.0001 13V2L14.0001 1H2.00012Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconCodeOss(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7)], true);
}