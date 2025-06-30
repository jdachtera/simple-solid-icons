import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M616 160h-67.3C511.2 70.7 422.9 8 320 8 183 8 72 119 72 256c0 16.4 1.6 32.5 4.7 48H24c-13.3 0-24 10.8-24 24 0 13.3 10.7 24 24 24h67.3c37.5 89.3 125.8 152 228.7 152 137 0 248-111 248-248 0-16.4-1.6-32.5-4.7-48H616c13.3 0 24-10.8 24-24 0-13.3-10.7-24-24-24zm-96 96c0 110.5-89.5 200-200 200-75.7 0-141.6-42-175.5-104H424c13.3 0 24-10.8 24-24 0-13.3-10.7-24-24-24H125.8c-3.8-15.4-5.8-31.4-5.8-48 0-110.5 89.5-200 200-200 75.7 0 141.6 42 175.5 104H216c-13.3 0-24 10.8-24 24 0 13.3 10.7 24 24 24h298.2c3.8 15.4 5.8 31.4 5.8 48zm-304-24h208c13.3 0 24 10.7 24 24 0 13.2-10.7 24-24 24H216c-13.3 0-24-10.7-24-24 0-13.2 10.7-24 24-24z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsIoxhost(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 640 512',
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