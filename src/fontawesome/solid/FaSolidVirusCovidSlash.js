import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c11.4-19.5 19.1-41.4 22.3-64.7l33.6 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-33.6 0c-4.2-30.7-16.3-58.8-34.1-82.3L484 125.9l11.3 11.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L472.7 46.7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L450.1 92l-23.8 23.8C402.8 97.9 374.7 85.8 344 81.6L344 48l16 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L280 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l16 0 0 33.6c-30.7 4.2-58.8 16.3-82.3 34.1L189.9 92l11.3-11.3c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L134.1 79.8 38.8 5.1zM149.2 213.5c-1.5 6-2.7 12.2-3.5 18.5L112 232l0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 33.6 0c4.2 30.7 16.3 58.8 34.1 82.3L156 386.1l-11.3-11.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l56.6 56.6c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L189.9 420l23.8-23.8c23.5 17.9 51.7 29.9 82.3 34.1l0 33.6-16 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0-33.6c20.4-2.8 39.7-9.1 57.3-18.2L149.2 213.5z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidVirusCovidSlash(props) {
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