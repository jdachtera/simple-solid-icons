import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>BandLab</title><path d="m19.32 6.076 3.567 6.164A8.835 8.835 0 0 1 24 16.255C24 20.76 20.455 24 15.425 24h-6.85C3.545 24 0 20.76 0 16.255a8.925 8.925 0 0 1 1.102-4.015l3.567-6.164h3.349L3.84 13.342a6.033 6.033 0 0 0-.829 2.869c0 2.869 1.964 4.909 5.651 4.909h6.654c3.709 0 5.662-2.04 5.662-4.909a6.043 6.043 0 0 0-.829-2.869l-4.167-7.266h3.338Zm-8.444 11.509c-1.581 0-2.531-.927-2.531-2.236 0-1.789 1.822-3.349 3.819-3.785L7.473 0h8.182l1.505 2.891h-5.727l3.414 8.345c.295.655.448 1.364.448 2.073 0 2.476-2.455 4.276-4.419 4.276Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBandlab(props) {
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