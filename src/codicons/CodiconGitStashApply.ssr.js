import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.00013 3.20711L7.00013 5H8.00013L8.00013 3.20711L10.6466 5.85356L11.3537 5.14645L7.85368 1.64645H7.14658L3.64658 5.14645L4.35368 5.85356L7.00013 3.20711Z\"></path>",
  _tmpl$2 = "<path d=\"M1.50012 9L1.00012 9.5V14.5L1.50012 15H13.5001L14.0001 14.5V9.5L13.5001 9H9.95012C9.71848 10.1411 8.7096 11 7.50012 11C6.29064 11 5.28177 10.1411 5.05013 9H1.50012ZM10.6633 10H13.0001V14H2.00012V10H4.33694C4.89867 11.1825 6.10392 12 7.50012 12C8.89632 12 10.1016 11.1825 10.6633 10Z\"></path>",
  _tmpl$3 = "<rect x=\"7\" y=\"6\" width=\"1\" height=\"1\"></rect>",
  _tmpl$4 = "<rect x=\"7\" y=\"8\" width=\"1\" height=\"1\"></rect>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconGitStashApply(props) {
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