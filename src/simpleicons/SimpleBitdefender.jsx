import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Bitdefender</title><path d="M1.685 0v.357l1.232 1.046c1.477 1.204 1.67 1.439 1.67 2.526V24h8.646c4.537 0 9.083-1.629 9.083-6.849 0-3.082-2.174-5.458-5.186-5.797v-.067c2.475-.745 4.169-2.54 4.169-5.253 0-4.372-3.73-6.032-7.349-6.032L1.686 0zm7.176 3.664h3.524c2.383 0 3.121.327 3.844 1.013.548.521.799 1.237.801 2.07 0 .775-.267 1.466-.831 2.004-.705.676-1.674 1.011-3.443 1.011H8.862V3.664zm0 9.758h4.099c3.456 0 5.085.881 5.085 3.39 0 3.153-3.055 3.526-5.256 3.526H8.86v-6.916z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBitdefender(props) {
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