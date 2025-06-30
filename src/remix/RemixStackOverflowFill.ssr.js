import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M18.001 20.0026V14.6693H20.001V22.0026H4.00098V14.6693H6.00098V20.0026H18.001ZM7.59977 14.7359L7.913 12.7566L16.75 14.456L16.6367 16.0421L7.59977 14.7359ZM8.79937 10.2041L9.53245 8.60463L17.5298 12.3367L16.7967 13.9362L8.79937 10.2041ZM11.0653 6.27208L12.1982 4.9392L18.9959 10.604L17.863 11.9368L11.0653 6.27208ZM15.3972 2.14014L20.6621 9.20443L19.2625 10.2707L13.9976 3.20645L15.3972 2.14014ZM7.33319 18.6679V16.6686H16.6634V18.6679H7.33319Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixStackOverflowFill(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
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