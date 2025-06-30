import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Sellfy</title><path d="M23.179.818C15.533-.273 8.406-.273.8.818-.266 8.377-.266 15.424.8 22.946 4.511 23.491 8.22 24 12.005 24c3.748 0 7.459-.51 11.17-1.017 1.1-7.56 1.1-14.607 0-22.165h.004zm-11.54 18.314c-2.055 0-4.226-.689-5.179-1.199l.807-3.126c1.064.705 2.682 1.395 4.446 1.395 1.395 0 2.24-.436 2.24-1.305 0-.615-.435-.975-1.575-1.26l-2.279-.631c-2.416-.66-3.557-1.891-3.557-3.855 0-2.365 1.83-4.256 5.619-4.256 1.99 0 3.973.545 5.07 1.092l-.951 2.976c-1.104-.615-2.79-1.125-4.226-1.125-1.365 0-1.95.436-1.95 1.092 0 .619.404.87 1.291 1.092l2.488.734c2.566.736 3.707 1.966 3.707 3.885-.076 2.701-2.461 4.517-5.957 4.517l.006-.026z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSellfy(props) {
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