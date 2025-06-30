import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M13.85 4.44002L10.571 1.13902L10.22 0.999023H2.5L2 1.49902V14.499L2.5 14.999H13.5L14 14.499V4.80002L13.85 4.44002ZM13 14H3V2.00002H9V5.50002L9.5 6.00002H13V14ZM10 5.00002V2.00002L13 5.00002H10ZM6.854 7.85402L5.208 9.50002L6.854 11.146L6.147 11.853L4.147 9.85302V9.14602L6.147 7.14602L6.854 7.85402ZM9.146 7.85402L9.853 7.14702L11.853 9.14702V9.85402L9.853 11.854L9.146 11.147L10.792 9.50102L9.146 7.85402Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconFileCode(props) {
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