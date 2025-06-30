import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>openHAB</title><path d="m12 9.103-9.76 9.768c-.376-.553-.725-1.123-.998-1.738l9.39-9.397L12 6.368l1.368 1.368 6.931 6.931-.01.035-.136.403-.156.393-.174.384-.192.374-.175.304L12 9.103zM12 0C5.39 0 0 5.39 0 12c0 1.306.211 2.563.6 3.741l.893-.893.668-.67A10.039 10.039 0 0 1 1.922 12C1.922 6.45 6.45 1.922 12 1.922S22.078 6.449 22.078 12c0 5.55-4.527 10.078-10.078 10.078a10.06 10.06 0 0 1-7.698-3.588l-.012.012-.309.309-.308.309-.308.308-.424.425C5.144 22.39 8.39 24 12.001 24 18.61 24 24 18.61 24 12S18.61 0 12 0z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOpenhab(props) {
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