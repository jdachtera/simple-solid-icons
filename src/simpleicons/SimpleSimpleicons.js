import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Simple Icons</title><path d="M12 0C8.688 0 6 2.688 6 6s2.688 6 6 6c4.64-.001 7.526 5.039 5.176 9.04h1.68A7.507 7.507 0 0 0 12 10.5 4.502 4.502 0 0 1 7.5 6c0-2.484 2.016-4.5 4.5-4.5s4.5 2.016 4.5 4.5H18c0-3.312-2.688-6-6-6Zm0 3a3 3 0 0 0 0 6c4 0 4-6 0-6Zm0 1.5A1.5 1.5 0 0 1 13.5 6v.002c-.002 1.336-1.617 2.003-2.561 1.058C9.995 6.115 10.664 4.5 12 4.5ZM7.5 15v1.5H9v6H4.5V24h15v-1.5H15v-6h1.5V15Zm3 1.5h3v6h-3zm-6 1.47c0 1.09.216 2.109.644 3.069h1.684A5.957 5.957 0 0 1 6 17.97Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSimpleicons(props) {
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