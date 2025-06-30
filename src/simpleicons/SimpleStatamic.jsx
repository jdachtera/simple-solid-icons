import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Statamic</title><path d="M19.78 21.639c1.754 0 2.398-.756 2.398-2.607v-3.62c0-1.722.837-2.704 1.641-3.17.242-.145.242-.483 0-.644-.836-.531-1.64-1.642-1.64-3.122v-3.54c0-1.996-.548-2.575-2.302-2.575H4.123c-1.754 0-2.301.58-2.301 2.575v3.556c0 1.48-.805 2.59-1.641 3.122a.377.377 0 0 0 0 .643c.804.451 1.64 1.433 1.64 3.17v3.605c0 1.85.645 2.607 2.399 2.607zm-7.82-3.299c-1.883 0-3.25-.563-4.522-1.673a.891.891 0 0 1-.29-.676.83.83 0 0 1 .193-.563l.403-.515c.193-.242.402-.354.643-.354.274 0 .531.112.805.29a5.331 5.331 0 0 0 2.993.884c.885 0 1.593-.37 1.593-1.126 0-1.963-6.533-.885-6.533-5.294 0-2.366 1.93-3.685 4.441-3.685 1.77 0 3.074.515 4.04 1.126.24.161.402.483.402.805 0 .193-.049.37-.161.53l-.29.435c-.21.29-.45.435-.756.435-.21 0-.435-.08-.676-.193a5.07 5.07 0 0 0-2.398-.564c-.95 0-1.513.515-1.513 1.046 0 2.012 6.534.918 6.534 5.198 0 2.414-1.947 3.894-4.908 3.894z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleStatamic(props) {
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