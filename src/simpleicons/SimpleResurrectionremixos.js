import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Resurrection Remix OS</title><path d="M24 3.53l-9.952.078C9.142 3.647 6.994 8.265 0 16.345c1.569.753 3.323 1.24 4.338.119 1.703-1.883 4.275-5.48 7.154-8.346 1.793-1.784 6.01-.865 9.95-1.23 1.351-.125 2.41-2.48 2.558-3.359zm-.147 6.076l-7.326.044c-4.39 0-5.38 2.492-11.91 10.24 1.194.563 3.28.84 3.763.257 1.78-2.158 2.506-3.51 5.36-6.362 1.657-1.658 4.39-.687 7.86-1.01 1.267-.12 2.132-2.449 2.253-3.169z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleResurrectionremixos(props) {
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