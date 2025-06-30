import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>hard-drive</title><g id=Layer_2 data-name="Layer 2"><g id=hard-drive><g id=hard-drive-2 data-name=hard-drive><path d=M20.79,11.34,17.45,4.66A3,3,0,0,0,14.76,3H9.24A3,3,0,0,0,6.55,4.66L3.21,11.34a2,2,0,0,0-.21.9V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12.24A2,2,0,0,0,20.79,11.34ZM8,17a1,1,0,1,1,1-1A1,1,0,0,1,8,17Zm8,0H12a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2ZM5.62,11,8.34,5.55A1,1,0,0,1,9.24,5h5.52a1,1,0,0,1,.9.55L18.38,11Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillHardDrive(props) {
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