import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M9.17699 10.1051L8.00026 8.92835L6.82348 10.1051L5.89526 9.17693L7.07205 8.00014L5.89526 6.82335L6.82348 5.89514L8.00026 7.07193L9.17699 5.8952L10.1052 6.82342L8.92848 8.00014L10.1052 9.17687L9.17699 10.1051Z\"></path>",
  _tmpl$2 = "<path d=\"M12.0002 8C12.0002 10.2091 10.2094 12 8.00024 12C5.79111 12 4.00024 10.2091 4.00024 8C4.00024 5.79086 5.79111 4 8.00024 4C10.2094 4 12.0002 5.79086 12.0002 8ZM11.0002 8C11.0002 6.34315 9.6571 5 8.00024 5C6.34339 5 5.00024 6.34315 5.00024 8C5.00024 9.65685 6.34339 11 8.00024 11C9.6571 11 11.0002 9.65685 11.0002 8Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconErrorSmall(props) {
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