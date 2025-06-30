import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Cirrus CI</title><path d="M19.422.453a1.113 1.113 0 0 0-1.113 1.115 1.113 1.113 0 0 0 1.112 1.114c1.31 0 2.35 1.042 2.35 2.363 0 1.32-1.04 2.363-2.35 2.363H1.112A1.113 1.113 0 0 0 0 8.52a1.113 1.113 0 0 0 1.113 1.117h18.31c1.308 0 2.35 1.042 2.35 2.363 0 1.32-1.042 2.363-2.35 2.363H1.112A1.113 1.113 0 0 0 0 15.48a1.113 1.113 0 0 0 1.113 1.112h18.31c1.308 0 2.35 1.042 2.35 2.363 0 1.32-1.042 2.363-2.35 2.363H1.112A1.113 1.113 0 0 0 0 22.432a1.113 1.113 0 0 0 1.113 1.115h18.31a1.113 1.113 0 0 0 .206-.022c2.42-.112 4.37-2.12 4.37-4.57 0-1.393-.642-2.634-1.63-3.478C23.356 14.632 24 13.393 24 12c0-1.393-.643-2.632-1.63-3.477C23.357 7.68 24 6.438 24 5.045c0-2.52-2.06-4.592-4.578-4.592z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCirrusci(props) {
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