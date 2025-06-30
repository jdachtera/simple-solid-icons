import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Sefaria</title><path d="M19.615 15.412c-.62 2.915-2.733 4.152-7.425 4.152-11.54 0-7.45-9.28-5.84-11.186.678-.85 1.152-1.553 2.874-1.553h3.273c4.567 0 5.437.217 6.582 2.55.617 1.258.975 3.971.536 6.036m1.238-5.79c-.385-2.492-.889-5.202-3.052-6.706-1.31-.911-2.663-.981-4.177-.981-1.026 0-4.666-.041-6.257-.041C5.833 1.893 4.779.618 4.779 0 3.777 1.234 3.001 2.597 3.272 4.245c.244 1.484 1.261 2.433 2.75 2.622C4.338 9.25 2.81 11.994 2.881 14.9c.046 1.83.467 9.1 8.686 9.1h1.497c3.507 0 5.632-2.606 6.25-3.614 1.822-2.963 2.122-7.548 1.537-10.764Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSefaria(props) {
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