import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Groupon</title><path d="M3.316 20.334C5.618 22.736 8.554 24 12.012 24c3.988 0 7.739-1.95 9.978-5.163 1.353-1.95 2.01-4.158 2.01-6.755 0-.484-.032-1.006-.063-1.529H10.595v4.61h6.687c-1.155 2.012-3.094 3.12-5.27 3.12-3.229 0-6.125-2.824-6.125-6.497 0-3.315 2.699-6.069 6.125-6.069 1.844 0 3.355.749 4.811 2.239h6.52C21.468 3.019 17.084 0 12.083 0c-3.323 0-6.22 1.17-8.53 3.409C1.25 5.647 0 8.572 0 11.754c-.008 3.417 1.108 6.271 3.316 8.58z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGroupon(props) {
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