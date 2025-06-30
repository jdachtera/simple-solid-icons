import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Abbvie</title><path d="M23.186 20.17c-1.533 0-2.14-.612-2.347-1.838l-.406-1.74c-.413.72-2.453 3.579-6.945 3.579H8.89C1.94 20.17 0 15.467 0 12c0-3.885 2.347-8.17 8.884-8.17h4.905c5.005 0 7.759 2.853 8.372 6.431.512 2.96 1.839 9.91 1.839 9.91zM13.076 6.378h-3.88c-4.698 0-6.231 2.965-6.231 5.623 0 2.653 1.533 5.618 6.236 5.618h3.875c4.904 0 6.236-3.065 6.236-5.618 0-2.246-1.231-5.618-6.236-5.618z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAbbvie(props) {
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