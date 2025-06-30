import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M9.99994 12H4.99994V11H9.99994V12Z\"></path>",
  _tmpl$2 = "<path d=\"M7.99994 6H9.99994V7H7.99994V9H6.99994V7H4.99994V6H6.99994V4H7.99994V6Z\"></path>",
  _tmpl$3 = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.7099 1.29004L13.7099 4.29004L13.9999 5V14L12.9999 15H2.99994L1.99994 14V2L2.99994 1H9.99994L10.7099 1.29004ZM2.99994 14H12.9999V5L9.99994 2H2.99994V14Z\"></path>",
  _tmpl$4 = "<path d=\"M13.42 0.999756L15.71 3.28976L16 3.99976L16.0001 13.9998L15.0001 14.9998L15 3.99976L12 0.999756H13.42Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconDiffMultiple(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3), _$ssr(_tmpl$4)], true);
}