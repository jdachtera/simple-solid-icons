import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.00016 2.56065L8 3.5H9L9.00016 2.56065L12.6466 6.20709L13.3537 5.49999L8.85371 0.999986H8.14661L3.64661 5.49999L4.35371 6.20709L8.00016 2.56065Z\"></path>",
  _tmpl$2 = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.00016 5.56065V7.99999H9.00016V5.56065L12.6466 9.20709L13.3537 8.49999L8.85371 3.99999H8.14661L3.64661 8.49999L4.35371 9.20709L8.00016 5.56065Z\"></path>",
  _tmpl$3 = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.03544 12H2V13H5.03544C5.27806 14.6961 6.73676 16 8.5 16C10.2632 16 11.7219 14.6961 11.9646 13H15.0001V12H11.9646C11.7219 10.3039 10.2632 9 8.5 9C6.73676 9 5.27806 10.3039 5.03544 12ZM11 12.5C11 13.8807 9.88071 15 8.5 15C7.11929 15 6 13.8807 6 12.5C6 11.1193 7.11929 10 8.5 10C9.88071 10 11 11.1193 11 12.5Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconRepoForcePush(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}