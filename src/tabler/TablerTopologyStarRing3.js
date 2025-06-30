import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path><path d="M6 12h4"></path><path d="M14 12h4"></path><path d="M15 7l-2 3"></path><path d="M9 7l2 3"></path><path d="M11 14l-2 3"></path><path d="M13 14l2 3"></path><path d="M10 5h4"></path><path d="M10 19h4"></path><path d="M17 17l2 -3"></path><path d="M19 10l-2 -3"></path><path d="M7 7l-2 3"></path><path d="M5 14l2 3">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerTopologyStarRing3(props) {
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