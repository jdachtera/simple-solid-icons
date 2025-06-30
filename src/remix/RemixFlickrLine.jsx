import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M5.99998 17C8.76146 17 11 14.7615 11 12 11 9.23899 8.76146 7 5.99998 7 3.23849 7 1 9.23899 1 12 1 14.7615 3.23849 17 5.99998 17ZM8.99995 12C8.99995 13.6569 7.65689 15 5.99998 15 4.34306 15 3 13.6569 3 12 3 10.3434 4.34319 9 5.99998 9 7.65676 9 8.99995 10.3434 8.99995 12ZM18 17C20.7615 17 23 14.7615 23 12 23 9.23899 20.7615 7 18 7 15.2385 7 13 9.23899 13 12 13 14.7615 15.2385 17 18 17ZM21 12C21 13.6569 19.6569 15 18 15 16.3431 15 15 13.6569 15 12 15 10.3434 16.3432 9 18 9 19.6568 9 21 10.3434 21 12Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixFlickrLine(props) {
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