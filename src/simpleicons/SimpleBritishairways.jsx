import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>British Airways</title><path d="M23.489 13.252c-.25.212-.605.444-1.241.767-1.347.72-2.198.983-2.198.983s-1.617-.234-4.207-1.007c0 0 1.306-.378 1.93-.581a40.11 40.11 0 0 0 1.958-.681c1.055-.396 1.73-.761 2.18-1.088.03-.022.058-.046.085-.068 0 0 .32.036.593.113.294.083.604.245.786.386.191.147.28.308.308.358a.681.681 0 0 1 .071.226s.014.085-.003.177a.579.579 0 0 1-.147.313zM24 12.196a.662.662 0 0 0-.08-.157 1.348 1.348 0 0 0-.197-.23 1.685 1.685 0 0 0-.227-.178c-.354-.232-.81-.362-1.215-.416-.627-.083-1.342-.07-1.411-.07-.23-.005-1.722.007-2.105.015-1.702.034-3.787.039-4.333.038-5.636.027-8.089-.094-10.82-.642C1.289 10.094 0 9.658 0 9.658c2.05-.073 14.004-.568 16.186-.627 1.427-.04 2.44-.048 3.253 0 .413.023.802.058 1.287.14a6.2 6.2 0 0 1 1.064.286c.486.18.893.442 1.096.707 0 0 .06.06.14.17.093.126.197.282.234.34.294.447.434.73.484.828.052.102.1.209.145.315.044.104.063.166.076.21.02.064.03.125.035.17Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBritishairways(props) {
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