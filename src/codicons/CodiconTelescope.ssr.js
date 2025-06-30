import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.24 1l.59.24 2.11 4.93-.23.59-3.29 1.41-.59-.24-.17-.41L6.1 9l-.58-.19-.16-.38L2.8 9.49l-.58-.24-.72-1.67.28-.59 2.5-1.06-.18-.41.24-.58L7.9 3.41 7.72 3 8 2.42 11.24 1zM2.5 7.64l.35.85 2.22-.91-.37-.85-2.2.91zm2.74-2.12l1.11 2.45 3-1.28-1.11-2.44-3 1.27zM8.79 3l1.86 4.11 2.29-1.01L11.18 2 8.72 3h.07zM8.5 9.1l3.02 4.9h-1.17l-1.88-3.03v4h-1V9.82L5.58 14h-1.1l1.7-3.9 2.32-1z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconTelescope(props) {
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