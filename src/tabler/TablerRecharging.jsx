import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47"></path><path d="M3.186 10.209a9 9 0 0 0 0 3.508"></path><path d="M4.5 16.962a9 9 0 0 0 2.47 2.495"></path><path d="M10.209 20.814a9 9 0 0 0 3.5 0"></path><path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47"></path><path d="M20.814 13.791a9 9 0 0 0 0 -3.508"></path><path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495"></path><path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02"></path><path d="M12 8l-2 4h4l-2 4"></path><path d="M12 21a9 9 0 0 0 0 -18">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerRecharging(props) {
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