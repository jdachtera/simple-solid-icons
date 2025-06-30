import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>UpLabs</title><path d="M9.804 19.205c-.112-.111-.186-.26-.297-.372-.889-.894-2.259-1.34-4.11-1.34-1.816 0-3.186.446-4.075 1.34-.111.112-.185.223-.296.372zm2.88-.044V5.164h2.959V6.9c.406-.702.887-1.219 1.479-1.588a4.057 4.057 0 0 1 2.034-.517c1.516 0 2.7.517 3.55 1.514.85.997 1.294 2.4 1.294 4.173 0 1.736-.444 3.102-1.294 4.136-.85 1.034-1.997 1.551-3.402 1.551-.851 0-1.554-.147-2.145-.48-.592-.295-1.11-.812-1.516-1.477.037.259.073.554.073.886 0 .296.037.665.037 1.071v2.955h-3.069zm2.81-8.679c0 .96.222 1.699.703 2.253.481.517 1.147.812 1.96.812.85 0 1.516-.258 1.96-.812.48-.517.703-1.293.703-2.253 0-.96-.222-1.699-.703-2.253-.48-.554-1.146-.812-1.997-.812-.813 0-1.479.295-1.96.85-.444.48-.665 1.255-.665 2.215zM7.73 5.201v5.577c0 .923-.185 1.588-.555 1.994-.37.406-.961.628-1.775.628-.813 0-1.405-.185-1.775-.591-.37-.407-.555-1.071-.555-2.031V5.2H0v5.577c0 1.661.333 2.88.998 3.767.111.11.185.258.296.369.888.886 2.256 1.33 4.105 1.33 1.812 0 3.18-.444 4.068-1.33.11-.111.185-.222.296-.37.665-.886.998-2.142.998-3.766V5.2Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleUplabs(props) {
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