import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M7.5 0H8.5V4.03095C10.4732 4.277 12 5.96019 12 8C12 10.0398 10.4732 11.723 8.5 11.9691V16H7.5V11.9691C5.52684 11.723 4 10.0398 4 8C4 5.96019 5.52684 4.277 7.5 4.03095V0ZM8 10.6C9.43594 10.6 10.6 9.43594 10.6 8C10.6 6.56406 9.43594 5.4 8 5.4C6.56406 5.4 5.4 6.56406 5.4 8C5.4 9.43594 6.56406 10.6 8 10.6Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconGitCommit(props) {
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