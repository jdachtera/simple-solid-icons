import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Answer</title><path d="M5.486 0c-1.92 0-2.881 0-3.615.373A3.428 3.428 0 0 0 .373 1.871C-.001 2.605 0 3.566 0 5.486v9.6c0 1.92 0 2.88.373 3.613.329.645.853 1.17 1.498 1.498.734.374 1.695.375 3.615.375h11.657V24l.793-.396c2.201-1.101 3.3-1.652 4.105-2.473a6.852 6.852 0 0 0 1.584-2.56C24 17.483 24 16.251 24 13.79V5.486c0-1.92 0-2.881-.373-3.615A3.428 3.428 0 0 0 22.129.373C21.395-.001 20.434 0 18.514 0H5.486zm1.371 10.285h10.286a5.142 5.142 0 0 1-10.286.024v-.024z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAnswer(props) {
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