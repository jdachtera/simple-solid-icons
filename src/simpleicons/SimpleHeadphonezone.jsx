import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Headphone Zone</title><path d="M17.63 4.702 17.96 0 9.086 2.484c-.463 1.754-.694 4.139.133 6.655.232-.067.463-.1.695-.133a4.724 4.724 0 0 1 5.133 4.305 4.724 4.724 0 0 1-4.305 5.133 4.724 4.724 0 0 1-5.132-4.305 4.618 4.618 0 0 1 1.159-3.543c-.86-1.325-1.987-3.609-1.954-6.49C1.107 6.623-.847 11.258.378 15.86c1.49 5.828 7.45 9.305 13.245 7.782 4.603-1.192 7.748-5.198 8.113-9.702l2.251-1.622-6.358-7.616Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleHeadphonezone(props) {
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