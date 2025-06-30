import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M17.2847 10.6683L22.5 13.9909L17.248 17.3368L12 13.9934L6.75198 17.3368L1.5 13.9909L6.7152 10.6684L1.5 7.34587L6.75206 4L11.9999 7.34335L17.2481 4L22.5 7.34587L17.2847 10.6683ZM17.2112 10.6684L11.9999 7.3484L6.78869 10.6683L12 13.9883L17.2112 10.6684ZM6.78574 18.4456L12.0377 15.1L17.2898 18.4456L12.0377 21.7916L6.78574 18.4456Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixDropboxFill(props) {
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