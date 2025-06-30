import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Avast</title><path d="M10.2941 2.991a3.0286 3.0286 0 0 1 4.4499 1.2039l7.0018 14.8042a11.937 11.937 0 0 0 2.2539-6.9131C24.0464 5.4569 18.7112.047 12.0834.0004 5.4556-.0463.047 5.2889.0004 11.9167a11.9356 11.9356 0 0 0 2.2213 7.0344l.2813-.0613 4.5692-1.008c.1287-.0286.1967.1454.084.2127L3.3736 20.337a11.9563 11.9563 0 0 0 8.5431 3.6625c3.76.0267 7.1258-1.68 9.3444-4.3705L9.8095 7.5735a3.0272 3.0272 0 0 1 .4846-4.5826zm2.1493 13.6089-7.3731.64a1.302 1.302 0 1 1 .1866-2.5666l7.2031 1.6972c.1287.0314.114.2174-.0166.2294zM9.03 10.116l8.9404 7.2324c.102.0827.01.2447-.1133.198L7.1035 13.4713a1.9593 1.9593 0 1 1 1.9266-3.3552z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAvast(props) {
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