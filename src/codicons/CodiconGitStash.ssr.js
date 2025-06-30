import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.00013 6.79289L7.00013 1H8.00013L8.00013 6.79289L10.6466 4.14644L11.3537 4.85355L7.85368 8.35355H7.14658L3.64658 4.85355L4.35368 4.14644L7.00013 6.79289Z\"></path>",
  _tmpl$2 = "<path d=\"M1.50012 9L1.00012 9.5V14.5L1.50012 15H13.5001L14.0001 14.5V9.5L13.5001 9H9.95012C9.71848 10.1411 8.7096 11 7.50012 11C6.29064 11 5.28177 10.1411 5.05013 9H1.50012ZM10.6633 10H13.0001V14H2.00012V10H4.33694C4.89867 11.1825 6.10392 12 7.50012 12C8.89632 12 10.1016 11.1825 10.6633 10Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconGitStash(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}