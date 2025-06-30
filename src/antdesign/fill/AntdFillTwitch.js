import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs><filter filterUnits=objectBoundingBox height=102.3% id=a width=102.3% x=-1.2% y=-1.2%><feOffset dy=2 in=SourceAlpha result=shadowOffsetOuter1></feOffset><feGaussianBlur in=shadowOffsetOuter1 result=shadowBlurOuter1 stdDeviation=2></feGaussianBlur><feColorMatrix in=shadowBlurOuter1 result=shadowMatrixOuter1 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix><feMerge><feMergeNode in=shadowMatrixOuter1></feMergeNode><feMergeNode in=SourceGraphic></feMergeNode></feMerge></filter></defs><g filter=url(#a) transform="translate(9 9)"><path d="M185.14 112L128 254.86V797.7h171.43V912H413.7L528 797.71h142.86l200-200V112zm314.29 428.57H413.7V310.21h85.72zm200 0H613.7V310.21h85.72z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: antdesign | License: MIT (<https://github.com/ant-design/ant-design-icons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function AntdFillTwitch(props) {
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
  return (() => {
    var _el$ = _$getNextElement(_tmpl$);
    _$spread(_el$, _$mergeProps(merged, {
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
    }), true, true);
    _$runHydrationEvents();
    return _el$;
  })();
}