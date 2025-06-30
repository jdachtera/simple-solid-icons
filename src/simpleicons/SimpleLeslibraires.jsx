import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Les libraires</title><path d="M11.79.002a10.579 10.579 0 0 0-7.735 3.575C.18 7.958.593 14.647 4.981 18.518a10.557 10.557 0 0 0 5.3 2.51L12.002 24l1.717-2.971a10.56 10.56 0 0 0 6.227-3.437c3.876-4.38 3.461-11.07-.926-14.94a10.567 10.567 0 0 0-7.23-2.65zM11.277 7.5l.613.512-1.862 2.444c-.005.007-.048.06-.048.115 0 .056.045.112.045.113l1.866 2.461-.615.502-2.573-2.403a.883.883 0 0 1-.3-.667c0-.38.22-.596.304-.678zm3.265 0 .613.512-1.863 2.444c-.005.007-.048.06-.048.115 0 .056.045.112.046.113l1.866 2.461-.615.502-2.573-2.403a.883.883 0 0 1-.301-.667c0-.38.222-.596.305-.678z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLeslibraires(props) {
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