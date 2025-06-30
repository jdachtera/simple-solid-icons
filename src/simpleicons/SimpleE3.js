import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>E3</title><path d="M11.0676 16.5185H4.7723v-2.6738h6.2615v-3.757H4.7723v-2.64h6.2615V3.691H0v16.6184h14.1476c0-.0339-2.7754-.7108-3.08-3.7908zm10.12-6.3969c1.8954 1.2862 2.8769 2.5385 2.8092 5.1108-.0677 2.6738-2.7754 5.043-5.72 5.043-2.0984 0-4.7723-.9477-5.7876-3.7569l3.4861-1.5569c.4738.88 1.1508 1.557 2.2 1.557 1.1507 0 1.9969-.88 2.0984-1.997.0339-.2708-.1353-2.2338-2.0984-2.3015l-2.2-.237 2.8092-4.5353h-6.3292v-3.757h11.5415z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleE3(props) {
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