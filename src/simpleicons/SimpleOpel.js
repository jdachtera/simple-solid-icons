import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Opel</title><path d="M12.291 4.57a7.46 7.46 0 0 0-7.338 5.006h.568a6.926 6.926 0 0 1 6.483-4.494 6.922 6.922 0 0 1 6.922 6.924c0 .116 0 .234-.01.351l.533.059c0-.134.01-.273.01-.4a7.46 7.46 0 0 0-7.168-7.446zM.869 10.113 0 10.566l13.25 1.44 3.63-1.893H.87zm3.682 1.483v.41a7.46 7.46 0 0 0 14.498 2.441h-.57a6.924 6.924 0 0 1-6.475 4.487 6.928 6.928 0 0 1-6.92-6.928v-.352l-.533-.058zm6.193.414-3.63 1.898h16.011l.873-.453v-.006l-13.254-1.44zm13.254 1.44H24l-.002-.007v.006z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOpel(props) {
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