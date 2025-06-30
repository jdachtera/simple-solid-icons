import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>OpsLevel</title><path d="M21.246 4.86 13.527.411a3.074 3.074 0 0 0-3.071 0l-2.34 1.344v6.209l3.104-1.793a1.515 1.515 0 0 1 1.544 0l3.884 2.241c.482.282.764.78.764 1.328v4.482a1.54 1.54 0 0 1-.764 1.328l-3.884 2.241V24l8.482-4.897a3.082 3.082 0 0 0 1.544-2.656V7.532a3.054 3.054 0 0 0-1.544-2.672ZM6.588 14.222V2.652L2.754 4.876A3.082 3.082 0 0 0 1.21 7.532v8.915c0 1.095.581 2.108 1.544 2.656L11.236 24v-6.209L7.352 15.55a1.525 1.525 0 0 1-.764-1.328Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOpslevel(props) {
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