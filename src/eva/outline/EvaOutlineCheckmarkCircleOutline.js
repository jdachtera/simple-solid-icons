import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>checkmark-circle</title><g id=Layer_2 data-name="Layer 2"><g id=checkmark-circle><g id=checkmark-circle-2 data-name=checkmark-circle><path d=M9.71,11.29a1,1,0,0,0-1.42,1.42l3,3A1,1,0,0,0,12,16h0a1,1,0,0,0,.72-.34l7-8a1,1,0,0,0-1.5-1.32L12,13.54Z></path><path d=M21,11h0a1,1,0,0,0-1,1,8,8,0,0,1-8,8h0A8,8,0,0,1,6.33,6.36,7.93,7.93,0,0,1,12,4a8.79,8.79,0,0,1,1.9.22,1,1,0,1,0,.47-1.94A10.54,10.54,0,0,0,12,2,10,10,0,0,0,5,19.09,9.93,9.93,0,0,0,12,22h0A10,10,0,0,0,22,12,1,1,0,0,0,21,11Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineCheckmarkCircleOutline(props) {
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