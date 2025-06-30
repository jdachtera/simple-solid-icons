import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M15.5066 4.646L12.0066 1.146H11.2996L8.65365 3.792V2.499L8.15365 1.999H2.15265L1.65265 2.499V14.499L2.15265 14.999H14.1526L14.6526 14.499V8.499L14.1526 7.999H12.8596L15.5056 5.353V4.646H15.5066ZM2.65265 3H7.65265V8H2.65265V3ZM2.65265 9H7.65265V14H2.65265V9ZM13.6526 14H8.65265V9H13.6526V14ZM8.65265 8V6.207L10.4456 8H8.65265ZM11.6526 7.793L8.85965 5L11.6526 2.207L14.4456 5L11.6526 7.793Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconExtensions(props) {
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