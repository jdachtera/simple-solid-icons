import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>FOX</title><path d="M3.069 9.7h3.42L6.3 6.932H0v10.136h3.069V13.8h2.789v-2.778H3.069ZM24 6.932h-3.291L19.48 9.1l-1.231-2.168h-3.292l2.871 5.076-2.871 5.06h3.308l1.215-2.142 1.213 2.142H24l-2.871-5.06Zm-12.592 0A5.067 5.067 0 1 0 16.475 12a5.067 5.067 0 0 0-5.067-5.065Zm.888 7.146a.867.867 0 0 1-.873.847.847.847 0 0 1-.837-.858V9.919a.882.882 0 0 1 .837-.9.913.913 0 0 1 .873.9Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFox(props) {
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