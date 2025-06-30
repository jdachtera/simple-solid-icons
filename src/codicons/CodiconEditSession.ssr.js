import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M9 1.99902H3V13.999H13V9H14V13.999L13 14.999H3L2 13.999V1.99902L3 0.999023H9V1.99902Z\"></path>",
  _tmpl$2 = "<path d=\"M10 11.999H5V10.999H10V11.999Z\"></path>",
  _tmpl$3 = "<path d=\"M8 5.99902H9V6.99902H8V9H7V6.99902H5V5.99902H7V4H8V5.99902Z\"></path>",
  _tmpl$4 = "<path d=\"M15 1V1.775C14.471 1.294 13.771 1 13 1C11.698 1 10.598 1.839 10.184 3H11.278C11.625 2.405 12.263 2 13 2C13.737 2 14.385 2.403 14.731 3H13.5V4H15.5L16 3.5V1H15Z\"></path>",
  _tmpl$5 = "<path d=\"M11 7V6.225C11.529 6.706 12.229 7 13 7C14.302 7 15.402 6.161 15.816 5H14.722C14.375 5.595 13.737 6 13 6C12.263 6 11.615 5.597 11.269 5H12.5V4H10.5L10 4.5V7H11Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconEditSession(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4), _$ssr(_tmpl$5)], true);
}