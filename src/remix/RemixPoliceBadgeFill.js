import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M2.91312 11.6739C3.23584 10.1953 3.53865 8.80805 2 6.5L5.5 2.5C5.5 2.5 9 4 12 1.5C15 4 18.5 2.5 18.5 2.5L22 6.5C20.4612 8.8081 20.7641 10.1954 21.0868 11.674C21.3933 13.0781 21.7177 14.5645 20.5 17C19.3425 19.315 17.3478 20.1227 15.4849 20.877C14.1289 21.4261 12.8428 21.9469 12.0003 23C11.1577 21.9469 9.8715 21.4261 8.51549 20.8771C6.65245 20.1227 4.65758 19.315 3.50001 17C2.28218 14.5645 2.60663 13.078 2.91312 11.6739ZM14.3776 12.7725L16.7552 10.4549L13.4694 9.97746L11.9999 7L10.5304 9.97746L7.24463 10.4549L9.62227 12.7725L9.06098 16.0451L11.9999 14.5L14.9388 16.0451L14.3776 12.7725Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixPoliceBadgeFill(props) {
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