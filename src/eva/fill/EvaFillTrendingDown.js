import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>trending-down</title><g id=Layer_2 data-name="Layer 2"><g id=trending-down><g id=trending-down-2 data-name=trending-down><path d=M21,12a1,1,0,0,0-2,0v2.3l-4.24-5a1,1,0,0,0-1.27-.21L9.22,11.7,4.77,6.36A1,1,0,1,0,3.23,7.64l5,6a1,1,0,0,0,1.28.22l4.28-2.57,4,4.71H15a1,1,0,0,0,0,2h5a1.1,1.1,0,0,0,.36-.07l.14-.08a1.19,1.19,0,0,0,.15-.09l0,0a.75.75,0,0,0,.14-.17,1.1,1.1,0,0,0,.09-.14.64.64,0,0,0,.05-.17A.78.78,0,0,0,21,17s0,0,0,0Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillTrendingDown(props) {
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