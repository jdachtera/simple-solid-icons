import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M489.5 111.66c30.65-1.8 45.98 36.44 22.58 56.33A243.35 243.35 0 00426 354c0 134.76 109.24 244 244 244 72.58 0 139.9-31.83 186.01-86.08 19.87-23.38 58.07-8.1 56.34 22.53C900.4 745.82 725.15 912 512.5 912 291.31 912 112 732.69 112 511.5c0-211.39 164.29-386.02 374.2-399.65l.2-.01zm-81.15 79.75l-4.11 1.36C271.1 237.94 176 364.09 176 511.5 176 697.34 326.66 848 512.5 848c148.28 0 274.94-96.2 319.45-230.41l.63-1.93-.11.07a307.06 307.06 0 01-159.73 46.26L670 662c-170.1 0-308-137.9-308-308 0-58.6 16.48-114.54 46.27-162.47z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: antdesign | License: MIT (<https://github.com/ant-design/ant-design-icons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function AntdOutlineMoon(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '64 64 896 896',
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