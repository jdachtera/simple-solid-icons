import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Rive</title><path d="M.643 1.475c0 .814.668 1.475 1.49 1.475H14.49c1.408 0 2.568.43 3.48 1.29.91.861 1.366 1.967 1.366 3.32 0 1.25-.456 2.274-1.367 3.072-.911.78-2.07 1.168-3.479 1.168H9.12c-.824 0-1.491.66-1.491 1.475 0 .815.667 1.475 1.491 1.475h5.93l5.342 8.482c.332.512.797.768 1.398.768.663 0 1.129-.256 1.398-.768.269-.533.217-1.096-.155-1.69l-4.753-7.56c1.284-.574 2.299-1.414 3.044-2.52.746-1.127 1.119-2.427 1.119-3.902 0-1.496-.342-2.807-1.026-3.934-.662-1.127-1.594-2.008-2.795-2.643C17.42.327 16.044 0 14.49 0H2.134C1.311 0 .643.66.643 1.475Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRive(props) {
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