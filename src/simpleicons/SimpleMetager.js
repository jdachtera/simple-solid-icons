import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>MetaGer</title><path d="M1.563 0v6.92h2.083c.818 0 1.227-.434 1.227-1.289V3.264h10.391c3.035 0 4.552 1.613 4.552 4.736v2.575H4.873v1.562c0 .851-.412 1.288-1.227 1.288H.827v4.23C.827 21.885 2.942 24 7.218 24h8.46c4.965 0 7.494-2.575 7.494-7.678V7.678C23.172 2.575 20.643 0 15.678 0zm8.706 13.425h2.246c1.513 0 2.089.777 2.089 2.226v3.389c0 1.15-.577 1.747-1.705 1.747h-1.16c-.976 0-1.47-.578-1.47-1.726v-5.636">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMetager(props) {
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