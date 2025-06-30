import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>arrow-circle-left</title><g id=Layer_2 data-name="Layer 2"><g id=arrow-circle-left><g id=arrow-circle-left-2 data-name=arrow-circle-left><path d=M22,12A10,10,0,1,0,12,22,10,10,0,0,0,22,12ZM10.14,15.69l-2.86-3a.49.49,0,0,1-.1-.15.54.54,0,0,1-.1-.16.94.94,0,0,1,0-.76,1,1,0,0,1,.21-.33l3-3a1,1,0,0,1,1.42,1.42L10.41,11H16a1,1,0,0,1,0,2H10.34l1.25,1.31a1,1,0,0,1-1.45,1.38Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillArrowCircleLeft(props) {
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