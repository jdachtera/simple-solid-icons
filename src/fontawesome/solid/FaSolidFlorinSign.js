import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M314.7 32c-38.8 0-73.7 23.3-88.6 59.1L170.7 224 64 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0L98.9 396.3c-5 11.9-16.6 19.7-29.5 19.7L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l37.3 0c38.8 0 73.7-23.3 88.6-59.1L213.3 288 320 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 45.1-108.3c5-11.9 16.6-19.7 29.5-19.7L352 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-37.3 0z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidFlorinSign(props) {
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