import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M7 12V13H6V12H7Z\"></path>",
  _tmpl$2 = "<path d=\"M6 12H5V11H6V12Z\"></path>",
  _tmpl$3 = "<path d=\"M7 11H6V10H7V11Z\"></path>",
  _tmpl$4 = "<path d=\"M6 10H5V9H6V10Z\"></path>",
  _tmpl$5 = "<path d=\"M7 9H6V8H7V9Z\"></path>",
  _tmpl$6 = "<path d=\"M6 8H5V7H6V8Z\"></path>",
  _tmpl$7 = "<path d=\"M7 7H6V6H7V7Z\"></path>",
  _tmpl$8 = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15 1.5V6.5L14.8496 6.84961L14 7.70996V14.5L13.5 15H2.5L2 14.5V1.5L2.5 1L14.5 1L15 1.5ZM3 14H5V13H6V14H11V7.67969L10.1504 6.83008L10 6.46973V2H7V4.5L6.5 5H6V6H5V5H4.5L4 4.5V2H3V14ZM11 6.26953L11.8496 7.12012L12 7.46973V14H13V7.5L13.1504 7.15039L14 6.29004V2H11V6.26953ZM5 4H6V2H5V4Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconFileZip(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5), _$ssr(_tmpl$6), _$ssr(_tmpl$7), _$ssr(_tmpl$8)], true);
}