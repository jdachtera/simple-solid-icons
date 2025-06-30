import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>volume-up</title><g id=Layer_2 data-name="Layer 2"><g id=volume-up><g id=volume-up-2 data-name=volume-up><path d=M18.28,8.37a1,1,0,1,0-1.56,1.26,4,4,0,0,1,0,4.74A1,1,0,0,0,17.5,16a1,1,0,0,0,.78-.37A6,6,0,0,0,18.28,8.37Z></path><path d=M19.64,5.23a1,1,0,1,0-1.28,1.54A6.8,6.8,0,0,1,21,12a6.8,6.8,0,0,1-2.64,5.23,1,1,0,0,0-.13,1.41A1,1,0,0,0,19,19a1,1,0,0,0,.64-.23A8.75,8.75,0,0,0,23,12,8.75,8.75,0,0,0,19.64,5.23Z></path><path d=M14.47,3.12a1,1,0,0,0-1,0L7,7.57H2a1,1,0,0,0-1,1v6.86a1,1,0,0,0,1,1H7l6.41,4.4A1.06,1.06,0,0,0,14,21a1,1,0,0,0,1-1V4A1,1,0,0,0,14.47,3.12Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillVolumeUp(props) {
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