import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M7.1939 2.1017C7.52403 1.43278 8.47789 1.43277 8.80802 2.1017L10.3291 5.18375L13.7304 5.67798C14.4685 5.78525 14.7633 6.69242 14.2291 7.2131L11.768 9.61215L12.349 12.9997C12.4751 13.7349 11.7034 14.2955 11.0431 13.9484L8.00096 12.349L4.95879 13.9484C4.29853 14.2955 3.52684 13.7349 3.65294 12.9997L4.23394 9.61215L1.77277 7.2131C1.23861 6.69242 1.53336 5.78525 2.27156 5.67798L5.67281 5.18375L7.1939 2.1017Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconStarFull(props) {
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