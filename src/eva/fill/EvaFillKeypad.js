import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>keypad</title><g id=Layer_2 data-name="Layer 2"><g id=keypad><g id=keypad-2 data-name=keypad><path d=M5,2A3,3,0,1,0,8,5,3,3,0,0,0,5,2Z></path><path d=M12,2a3,3,0,1,0,3,3A3,3,0,0,0,12,2Z></path><path d=M19,8a3,3,0,1,0-3-3A3,3,0,0,0,19,8Z></path><path d=M5,9a3,3,0,1,0,3,3A3,3,0,0,0,5,9Z></path><path d=M12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z></path><path d=M19,9a3,3,0,1,0,3,3A3,3,0,0,0,19,9Z></path><path d=M5,16a3,3,0,1,0,3,3A3,3,0,0,0,5,16Z></path><path d=M12,16a3,3,0,1,0,3,3A3,3,0,0,0,12,16Z></path><path d=M19,16a3,3,0,1,0,3,3A3,3,0,0,0,19,16Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillKeypad(props) {
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