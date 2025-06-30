import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Google Cloud Spanner</title><path d="M12 9.06 7.944 6.864V2.388L10.38.924v3.66l1.62.744 1.62-.744V.924l2.436 1.464v4.476L12 9.06zm-8.124 4.752L0 16.056v2.988l3.228-1.86 1.404.912.096 1.632-3.24 1.872 2.616 1.476 3.828-2.268-.132-4.596-3.924-2.4zm9.732-.9V8.758l-1.37.742-.238.129-.238-.13-1.37-.741v4.154l-3.613 2.09 1.282.783.231.142.008.27.046 1.612L12 15.696l3.595 2.079.045-1.59.008-.27.231-.142 1.301-.795-3.572-2.066zm7.164 4.272L24 19.044v-2.988L20.064 13.8l-3.924 2.4-.132 4.596 3.888 2.244 2.616-1.44-3.24-1.836.096-1.668 1.404-.912z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGooglecloudspanner(props) {
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