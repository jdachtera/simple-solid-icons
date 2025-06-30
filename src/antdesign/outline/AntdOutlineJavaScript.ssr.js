import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M416 176H255.54v425.62c0 105.3-36.16 134.71-99.1 134.71-29.5 0-56.05-5.05-76.72-12.14L63 848.79C92.48 858.91 137.73 865 173.13 865 317.63 865 416 797.16 416 602.66zm349.49-16C610.26 160 512 248.13 512 364.6c0 100.32 75.67 163.13 185.7 203.64 79.57 28.36 111.03 53.7 111.03 95.22 0 45.57-36.36 74.96-105.13 74.96-63.87 0-121.85-21.31-161.15-42.58v-.04L512 822.43C549.36 843.73 619.12 865 694.74 865 876.52 865 961 767.75 961 653.3c0-97.25-54.04-160.04-170.94-204.63-86.47-34.44-122.81-53.67-122.81-97.23 0-34.45 31.45-65.84 96.3-65.84 63.83 0 107.73 21.45 133.3 34.64l38.34-128.19C895.1 174.46 841.11 160 765.5 160\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: antdesign | License: MIT (<https://github.com/ant-design/ant-design-icons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function AntdOutlineJavaScript(props) {
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