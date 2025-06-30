import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Wagmi</title><path d="M2.7391 13.2065c0 .7564.6132 1.3696 1.3696 1.3696h2.7391c.7564 0 1.3696-.6132 1.3696-1.3696V7.7283c0-.7564.6132-1.3696 1.3696-1.3696s1.3695.6132 1.3695 1.3696v5.4782c0 .7564.6132 1.3696 1.3696 1.3696h2.7391c.7564 0 1.3696-.6132 1.3696-1.3696V7.7283c0-.7564.6131-1.3696 1.3695-1.3696s1.3696.6132 1.3696 1.3696v8.2174c0 .7564-.6132 1.3695-1.3696 1.3695H1.3696C.6132 17.3152 0 16.7021 0 15.9457V7.7283c0-.7564.6132-1.3696 1.3696-1.3696s1.3695.6132 1.3695 1.3696zm19.4348 4.4348c1.0085 0 1.8261-.8176 1.8261-1.826 0-1.0086-.8176-1.8262-1.826-1.8262-1.0086 0-1.8262.8176-1.8262 1.8261 0 1.0085.8176 1.826 1.8261 1.826z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWagmi(props) {
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