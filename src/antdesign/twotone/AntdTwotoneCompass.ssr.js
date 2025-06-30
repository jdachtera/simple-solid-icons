import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zM327.6 701.7c-2 .9-4.4 0-5.3-2.1-.4-1-.4-2.2 0-3.2L421 470.9 553.1 603l-225.5 98.7zm375.1-375.1L604 552.1 471.9 420l225.5-98.7c2-.9 4.4 0 5.3 2.1.4 1 .4 2.1 0 3.2z\" fill=\"currentColor\"></path>",
  _tmpl$2 = "<path d=\"M322.3 696.4c-.4 1-.4 2.2 0 3.2.9 2.1 3.3 3 5.3 2.1L553.1 603 421 470.9l-98.7 225.5zm375.1-375.1L471.9 420 604 552.1l98.7-225.5c.4-1.1.4-2.2 0-3.2-.9-2.1-3.3-3-5.3-2.1z\" fill=\"currentColor\"></path>",
  _tmpl$3 = "<path d=\"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z\" fill=\"currentColor\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: antdesign | License: MIT (<https://github.com/ant-design/ant-design-icons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function AntdTwotoneCompass(props) {
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
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2), _$ssr(_tmpl$3)], true);
}