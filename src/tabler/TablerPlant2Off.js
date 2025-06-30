import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M2 9c0 5.523 4.477 10 10 10a9.953 9.953 0 0 0 5.418 -1.593m2.137 -1.855a9.961 9.961 0 0 0 2.445 -6.552"></path><path d="M12 19c0 -1.988 .58 -3.84 1.58 -5.397m1.878 -2.167a9.961 9.961 0 0 1 6.542 -2.436"></path><path d="M2 9a10 10 0 0 1 10 10"></path><path d="M12 4a9.7 9.7 0 0 1 3 7.013"></path><path d="M9.01 11.5a9.696 9.696 0 0 1 .163 -2.318m1.082 -2.942a9.696 9.696 0 0 1 1.745 -2.24"></path><path d="M3 3l18 18">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerPlant2Off(props) {
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