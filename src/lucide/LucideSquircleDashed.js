import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M13.77 3.043a34 34 0 0 0-3.54 0"></path><path d="M13.771 20.956a33 33 0 0 1-3.541.001"></path><path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44"></path><path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438"></path><path d="M20.957 10.23a33 33 0 0 1 0 3.54"></path><path d="M3.043 10.23a34 34 0 0 0 .001 3.541"></path><path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438"></path><path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideSquircleDashed(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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