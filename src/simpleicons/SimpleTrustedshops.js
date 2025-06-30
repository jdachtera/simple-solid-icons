import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Trusted Shops</title><path d="M15.187 14.332c-1.1 1.626-2.63 3.108-4.687 3.108-2.175 0-3.442-1.362-3.442-3.562 0-3.561 2.63-7.052 6.335-7.052 1.242 0 2.916.502 2.916 2.009 0 2.7-4.231 3.609-6.311 4.135-.072.457-.143.908-.143 1.362 0 .933.501 1.793 1.53 1.793 1.338 0 2.412-1.29 3.203-2.247zm-1.148-5.808c0-.55-.31-.978-.884-.978-1.722 0-2.608 3.346-2.94 4.66 1.601-.48 3.824-1.794 3.824-3.682zM12 0a12 12 0 1 0 12 11.997A11.997 11.997 0 0 0 12 0zm-.1 19.523a7.563 7.563 0 1 1 7.564-7.563 7.563 7.563 0 0 1-7.563 7.56Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleTrustedshops(props) {
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