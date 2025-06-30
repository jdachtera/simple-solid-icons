import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>eye-off-2</title><g id=Layer_2 data-name="Layer 2"><g id=eye-off-2><g id=eye-off-2-2 data-name=eye-off-2><path d=M17.81,13.39A8.93,8.93,0,0,0,21,7.62a1,1,0,1,0-2-.24,7.07,7.07,0,0,1-14,0,1,1,0,1,0-2,.24,8.93,8.93,0,0,0,3.18,5.77L3.88,15.71a1,1,0,0,0,1.41,1.41l2.61-2.6a9.06,9.06,0,0,0,3.1.92V19a1,1,0,0,0,2,0V15.44a9.06,9.06,0,0,0,3.1-.92l2.61,2.6a1,1,0,0,0,1.41-1.41Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineEyeOff2Outline(props) {
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