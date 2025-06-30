import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>D</title><path d="M22.635 3.883a1.364 1.25 0 0 0-1.363 1.25 1.364 1.25 0 0 0 1.363 1.25A1.364 1.25 0 0 0 24 5.133a1.364 1.25 0 0 0-1.365-1.25zm-16.004.418-6.027.008c-.026 0-.051-.003-.076 0-.296.036-.527.273-.528.558l.018 14.574c0 .22.06.676.682.676l5.58-.021c1.595-.003 2.664-.031 3.3-.112h.016a11.43 11.43 0 0 0 1.955-.469c1.22-.38 2.3-.944 3.23-1.697a7.854 7.854 0 0 0 2.114-2.562 6.716 6.716 0 0 0 .646-1.987 4.244 3.89 0 0 0 .26.028 4.244 3.89 0 0 0 4.244-3.89 4.244 3.89 0 0 0-4.244-3.89 4.244 3.89 0 0 0-2.9 1.082 8.838 8.838 0 0 0-2.25-1.355c-1.536-.65-3.536-.948-6.02-.943zm-.262 3.004c1.215-.003 2.079.034 2.569.101a7.32 7.32 0 0 1 1.617.436c.57.218 1.068.483 1.496.814 1.177.915 1.732 1.999 1.734 3.432.003 1.468-.534 2.611-1.68 3.57a5.582 5.582 0 0 1-1.177.742c-.409.19-.942.355-1.615.496-.636.128-1.6.2-2.856.202l-2.673.004-.012-9.793 2.598-.004z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleD(props) {
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