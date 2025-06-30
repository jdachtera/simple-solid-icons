import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M403.5 455.41A246.17 246.17 0 0 1 256 504C118.81 504 8 393 8 256 8 118.81 119 8 256 8a247.39 247.39 0 0 1 165.7 63.5 3.57 3.57 0 0 1-2.86 6.18A418.62 418.62 0 0 0 362.13 74c-129.36 0-222.4 53.47-222.4 155.35 0 109 92.13 145.88 176.83 178.73 33.64 13 65.4 25.36 87 41.59a3.58 3.58 0 0 1 0 5.72zM503 233.09a3.64 3.64 0 0 0-1.27-2.44c-51.76-43-93.62-60.48-144.48-60.48-84.13 0-80.25 52.17-80.25 53.63 0 42.6 52.06 62 112.34 84.49 31.07 11.59 63.19 23.57 92.68 39.93a3.57 3.57 0 0 0 5-1.82A249 249 0 0 0 503 233.09z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsShopware(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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