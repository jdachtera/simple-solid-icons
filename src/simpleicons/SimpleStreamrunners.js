import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>StreamRunners</title><path d="M23.572 12.737a.854.854 0 0 0 0-1.48l-12.66-7.31c-.695-.4-1.51.292-1.225 1.043l.98 2.587c.106.28-.1.578-.4.578H7.55c-.658 0-1.275.32-1.656.857L3.632 12.21h8.553c.02 0 .034.02.027.04-.847 2.253-1.69 4.508-2.537 6.761-.282.75.532 1.44 1.227 1.04zM.001 17.052a.005.005 0 0 0 0 .006h8.297a.64.64 0 0 0 .612-.452l.656-2.134a.64.64 0 0 0-.613-.83l-6.805.018a.078.078 0 0 0-.067.036C1.386 14.813.694 15.933 0 17.052Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleStreamrunners(props) {
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