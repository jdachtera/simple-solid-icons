import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M130 480c40.6 0 80.4-11 115.2-31.9L352 384l-224 0 0 96 2 0zM352 128L245.2 63.9C210.4 43 170.6 32 130 32l-2 0 0 96 224 0zM96 128l0-96L80 32C53.5 32 32 53.5 32 80l0 48 8 0c-22.1 0-40 17.9-40 40l0 16L0 328l0 16c0 22.1 17.9 40 40 40l-8 0 0 48c0 26.5 21.5 48 48 48l16 0 0-96 8 0c26.2 0 49.4-12.6 64-32l288 0c69.3 0 135-22.7 179.2-81.6c6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160l-288 0c-14.6-19.4-37.8-32-64-32l-8 0zM512 243.6l0 24.9c0 19.6-15.9 35.6-35.6 35.6c-2.5 0-4.4-2-4.4-4.4l0-87.1c0-2.5 2-4.4 4.4-4.4c19.6 0 35.6 15.9 35.6 35.6z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidShuttleSpace(props) {
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