import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Radio France</title><path d="M12 24C6.144 24 1.397 19.497 1.397 13.94a9.6 9.6 0 0 1 .208-1.991h5.99a4.4 4.4 0 0 0-.474 1.991c0 2.557 2.184 4.63 4.88 4.63.6 0 1.175-.104 1.706-.292v5.592Q12.872 24 12 24m10.355-7.888H16.31a4.4 4.4 0 0 0 .57-2.172c0-2.557-2.184-4.63-4.879-4.63-.504 0-.99.073-1.448.208V0h5.25v4.546c3.978 1.45 6.802 5.109 6.802 9.394a9.6 9.6 0 0 1-.249 2.172">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRadiofrance(props) {
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