import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Coderwall</title><path d="M21.354 18.708c1.46 0 2.646 1.185 2.646 2.646C24 22.814 22.814 24 21.354 24s-2.646-1.186-2.646-2.646c0-1.458 1.185-2.646 2.646-2.646zM12 9.354c1.46 0 2.646 1.186 2.646 2.646S13.46 14.646 12 14.646 9.354 13.46 9.354 12 10.54 9.354 12 9.354zm9.354 0C22.814 9.354 24 10.54 24 12s-1.186 2.646-2.646 2.646S18.708 13.46 18.708 12s1.185-2.646 2.646-2.646zM12 0c1.46 0 2.646 1.185 2.646 2.646 0 1.46-1.186 2.646-2.646 2.646S9.354 4.106 9.354 2.646 10.54 0 12 0zM2.646 0c1.46 0 2.646 1.185 2.646 2.646 0 1.46-1.186 2.646-2.646 2.646S0 4.106 0 2.646 1.186 0 2.646 0zm18.708 0C22.814 0 24 1.185 24 2.646c0 1.46-1.186 2.646-2.646 2.646s-2.646-1.186-2.646-2.646S19.893 0 21.354 0z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCoderwall(props) {
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