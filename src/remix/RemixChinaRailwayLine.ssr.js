import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M11 20V13H9V10H15V13H13V20H18V22H6V20H11ZM10 2.22302V1H14V2.22302C18.008 3.13247 21 6.71683 21 11C21 14.1235 19.4088 16.8754 16.9928 18.4892L15.8833 16.825C17.7624 15.5697 19 13.4294 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 13.4294 6.23758 15.5697 8.11669 16.825L7.00717 18.4892C4.59118 16.8754 3 14.1235 3 11C3 6.71683 5.99202 3.13247 10 2.22302Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixChinaRailwayLine(props) {
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