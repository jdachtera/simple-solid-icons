import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M18.001 20.0025V15.0001H20.001V22.0025H4.00098V15.0001H6.00098V20.0025H18.001ZM7.50098 18.0001V16.0001H16.501V18.0001H7.50098ZM7.578 13.6197L7.9253 11.65L16.7886 13.2129L16.4413 15.1825L7.578 13.6197ZM9.21156 8.11608L10.2116 6.38403L18.0058 10.884L17.0058 12.6161L9.21156 8.11608ZM12.6289 3.5031L14.161 2.21753L19.9461 9.11193L18.414 10.3975L12.6289 3.5031Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixStackOverflowLine(props) {
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