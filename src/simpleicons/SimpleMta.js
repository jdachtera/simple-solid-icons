import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>MTA</title><path d="M15.171 10.07l-1.293-.109v6.861l-1.926.34-.004-7.371-1.637-.145V6.944l4.86.85zm3.668 5.884l-1.142.198-.134-1-1.113.145-.14 1.1-1.473.26 1.458-8.651 1.385.24zm-1.48-2.492l-.305-2.642h-.068l-.31 2.682zM10.991 24c6.59 0 11.932-5.373 11.932-12 0-6.628-5.342-12-11.932-12C6.86 0 3.22 2.112 1.077 5.323l3.307.583.91 6.965c.003-.012.066-.004.066-.004l.998-6.615 3.309.58v10.735l-2.089.367V13.32s.078-1.987.032-2.327c0 0-.09.002-.092-.005l-1.246 7.18-2.075.366L2.672 10.8l-.092-.007c-.032.28.112 2.707.112 2.707v5.298l-1.364.24C3.498 22.044 7.016 24 10.991 24z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMta(props) {
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