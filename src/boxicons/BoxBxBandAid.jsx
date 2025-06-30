import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M8.111 21.889a5.962 5.962 0 0 0 4.242-1.757l7.778-7.778a6.007 6.007 0 0 0 0-8.485 5.965 5.965 0 0 0-4.243-1.757 5.962 5.962 0 0 0-4.242 1.757l-7.778 7.778a6.007 6.007 0 0 0 0 8.485 5.965 5.965 0 0 0 4.243 1.757zm-2.829-8.828 7.778-7.778a3.976 3.976 0 0 1 2.828-1.171c1.069 0 2.073.416 2.829 1.171a4.006 4.006 0 0 1 0 5.657l-7.778 7.778a3.976 3.976 0 0 1-2.828 1.171 3.977 3.977 0 0 1-2.829-1.171 4.008 4.008 0 0 1 0-5.657z"></path><circle cx=9 cy=12 r=1></circle><circle cx=15 cy=12 r=1></circle><circle cx=12 cy=15 r=1></circle><circle cx=12 cy=9 r=1>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxBandAid(props) {
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