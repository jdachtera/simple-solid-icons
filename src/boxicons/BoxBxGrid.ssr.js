import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M15 3H4.984c-1.103 0-2 .897-2 2v14.016c0 1.103.897 2 2 2H19c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-4zm4 5h-3V5h3v3zM4.984 10h3v4.016h-3V10zm5 0H14v4.016H9.984V10zM16 10h3v4.016h-3V10zm-2-5v3H9.984V5H14zM7.984 5v3h-3V5h3zm-3 11.016h3v3h-3v-3zm5 3v-3H14v3H9.984zm6.016 0v-3h3.001v3H16z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxGrid(props) {
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