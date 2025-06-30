import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Wistia</title><path d="M23.69 6.605c.507-3.094-1.24-3.944-1.24-3.944s.073 2.519-4.555 3.053C13.787 6.188 0 5.83 0 5.83l4.43 5.081c1.2 1.378 1.838 1.537 3.187 1.633 1.349.09 4.327.058 6.345-.096 2.206-.169 5.35-.888 7.477-2.535 1.09-.843 2.039-2.016 2.25-3.308m.284 3.205s-.556 1.105-3.33 2.853c-1.182.744-3.637 1.535-6.793 1.84-1.705.166-4.842.031-6.188.031-1.354 0-1.974.285-3.187 1.652L0 21.23s1.55.008 2.72.008c1.17 0 8.488.425 11.735-.468 10.546-2.899 9.518-10.96 9.518-10.96Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWistia(props) {
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