import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Craft CMS</title><path d="M21.474 0H2.526A2.516 2.516 0 0 0 0 2.526v18.948A2.516 2.516 0 0 0 2.526 24h18.948A2.534 2.534 0 0 0 24 21.474V2.526A2.516 2.516 0 0 0 21.474 0m-9.516 14.625c.786 0 1.628-.31 2.442-1.039l1.123 1.291c-1.18.955-2.527 1.488-3.874 1.488-2.667 0-4.35-1.769-3.958-4.267.393-2.498 2.667-4.266 5.334-4.266 1.29 0 2.498.505 3.34 1.431l-1.572 1.291c-.45-.59-1.207-.982-2.05-.982-1.6 0-2.834 1.039-3.087 2.526-.224 1.488.674 2.527 2.302 2.527">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCraftcms(props) {
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