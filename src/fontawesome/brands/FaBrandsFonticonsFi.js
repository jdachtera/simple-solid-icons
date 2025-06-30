import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M114.4 224h92.4l-15.2 51.2h-76.4V433c0 8-2.8 9.2 4.4 10l59.6 5.6V483H0v-35.2l29.2-2.8c7.2-.8 9.2-3.2 9.2-10.8V278.4c0-3.2-4-3.2-8-3.2H0V224h38.4v-28.8c0-68 36.4-96 106-96 46.8 0 88.8 11.2 88.8 72.4l-69.6 8.4c.4-25.6-6-31.6-22.4-31.6-25.2 0-26 13.6-26 37.6v32c0 3.2-4.8 6-.8 6zM384 483H243.2v-34.4l28-3.6c7.2-.8 10.4-2.4 10.4-10V287c0-5.6-4-9.2-9.2-10.8l-33.2-8.8 9.2-40.4h110v208c0 8-3.6 8.8 4 10l21.6 3.6V483zm-30-347.2l12.4 45.6-10 10-42.8-22.8-42.8 22.8-10-10 12.4-45.6-30-36.4 4.8-10h38L307.2 51H320l21.2 38.4h38l4.8 13.2-30 33.2z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsFonticonsFi(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 384 512',
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