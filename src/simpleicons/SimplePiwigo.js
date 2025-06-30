import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Piwigo</title><path d="M16.712 12.777A4.713 4.713 0 0 1 12 17.49a4.713 4.713 0 0 1-4.713-4.713A4.713 4.713 0 0 1 12 8.066a4.713 4.713 0 0 1 4.712 4.711zm2.4-12.776c-2.572.058-2.358 1.544-8.237 1.555h-4.15A5.947 5.947 0 0 0 .777 7.503v10.55A5.947 5.947 0 0 0 6.725 24h10.55a5.947 5.947 0 0 0 5.948-5.947V4.081l-.008-.018c0-.014.004-.028.004-.043 0-2.227-1.88-4.02-4.108-4.02zm.09 2.545a1.409 1.409 0 0 1 1.407 1.41A1.409 1.409 0 0 1 19.2 5.364a1.409 1.409 0 0 1-1.41-1.408 1.409 1.409 0 0 1 1.41-1.41zM12 6.12a6.656 6.656 0 0 1 6.656 6.655A6.656 6.656 0 0 1 12 19.434a6.656 6.656 0 0 1-6.656-6.657A6.656 6.656 0 0 1 12 6.122z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePiwigo(props) {
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