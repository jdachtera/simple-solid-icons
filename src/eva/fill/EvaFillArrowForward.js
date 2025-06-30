import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>arrow-forward</title><g id=Layer_2 data-name="Layer 2"><g id=arrow-forward><g id=arrow-forward-2 data-name=arrow-forward><path d=M5,13H16.86l-3.63,4.36a1,1,0,0,0,1.54,1.28l5-6a1.19,1.19,0,0,0,.09-.15c0-.05.05-.08.07-.13A1,1,0,0,0,20,12h0a1,1,0,0,0-.07-.36c0-.05-.05-.08-.07-.13a1.19,1.19,0,0,0-.09-.15l-5-6A1,1,0,0,0,14,5a1,1,0,0,0-.64.23,1,1,0,0,0-.13,1.41L16.86,11H5a1,1,0,0,0,0,2Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillArrowForward(props) {
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