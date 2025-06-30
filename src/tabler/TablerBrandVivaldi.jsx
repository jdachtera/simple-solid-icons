import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M21.648 6.808c-2.468 4.28 -4.937 8.56 -7.408 12.836c-.397 .777 -1.366 1.301 -2.24 1.356c-.962 .102 -1.7 -.402 -2.154 -1.254c-1.563 -2.684 -3.106 -5.374 -4.66 -8.064c-.943 -1.633 -1.891 -3.266 -2.83 -4.905a2.47 2.47 0 0 1 -.06 -2.45a2.493 2.493 0 0 1 2.085 -1.307c.951 -.065 1.85 .438 2.287 1.281c.697 1.19 2.043 3.83 2.55 4.682a3.919 3.919 0 0 0 3.282 2.017c2.126 .133 3.974 -.95 4.21 -3.058c0 -.164 .228 -3.178 .846 -3.962c.619 -.784 1.64 -1.155 2.606 -.893a2.484 2.484 0 0 1 1.814 2.062c.08 .581 -.041 1.171 -.343 1.674">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandVivaldi(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
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