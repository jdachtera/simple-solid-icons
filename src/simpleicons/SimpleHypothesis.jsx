import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Hypothesis</title><path d="M3.425 0c-.93 0-1.71.768-1.71 1.72v17.14c0 .94.78 1.71 1.71 1.71h5.95l2.62 3.43 2.62-3.43h5.95c.93 0 1.72-.77 1.72-1.71V1.72c0-.95-.79-1.72-1.72-1.72H3.425m1.71 3.43h2.58v6s.86-1.71 2.56-1.71c1.72 0 3.46.85 3.46 3.52v5.9h-2.58V12c0-1.39-.88-1.93-1.73-1.71-.86.21-1.71 1.12-1.71 3v3.85h-2.58V3.43m12.86 10.29c.95 0 1.72.78 1.72 1.7a1.71 1.71 0 01-1.72 1.71 1.71 1.71 0 01-1.71-1.71c0-.92.76-1.71 1.71-1.71z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleHypothesis(props) {
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