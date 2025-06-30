import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z"></path><path d="M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0z"></path><path d="M12 3v4"></path><path d="M21 12h-4"></path><path d="M12 21v-4"></path><path d="M3 12h4"></path><path d="M18.364 5.636l-2.828 2.828"></path><path d="M18.364 18.364l-2.828 -2.828"></path><path d="M5.636 18.364l2.828 -2.828"></path><path d="M5.636 5.636l2.828 2.828">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandVsco(props) {
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