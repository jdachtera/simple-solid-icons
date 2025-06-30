import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Protractor</title><path d="M12 0C5.37 0 0 5.372 0 12s5.371 12 12 12c6.628 0 12-5.372 12-12S18.627 0 12 0zm-.273 3.789v1.71h.545v-1.71a9.055 9.055 0 015.961 2.468l-1.277 1.278.386.386 1.277-1.278a9.057 9.057 0 012.469 5.96h-1.71v.546h1.717v2.001H2.905v-2H4.62v-.546h-1.71a9.058 9.058 0 012.469-5.96L6.658 7.92l.386-.386-1.278-1.278a9.056 9.056 0 015.96-2.468zM12 6.965a5.912 5.912 0 00-5.913 5.912h11.824A5.91 5.91 0 0012 6.965z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleProtractor(props) {
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