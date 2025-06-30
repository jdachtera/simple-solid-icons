import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Akasa Air</title><path d="M14.7315 1.8005c-2.297 0-3.2705.731-4.165 2.3824l-.6291 1.1158a3.2264 3.2264 0 0 0-.5293 1.4828c.026.4297.1655.8441.4064 1.201l5.0022 8.9444c1.789 3.1968 4.0007 4.9858 8.7642 4.9858.4075 0 .508-.2434.344-.5292L17.4367 9.793C16.14 7.4536 15.69 5.7656 15.69 4.5483a3.5322 3.5322 0 0 1 .8143-2.425c.1218-.1376.101-.3228-.1425-.3228ZM7.8123 8.8558c-.1218 0-.201.084-.3228.285L.0787 21.7113a.3929.3929 0 0 0-.0786.2441c0 .2435.386.2442.4866.2442 5.335 0 9.041-3.2553 9.041-7.9712a10.0555 10.0555 0 0 0-1.409-5.107c-.1006-.1589-.1847-.2655-.3064-.2655Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAkasaair(props) {
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