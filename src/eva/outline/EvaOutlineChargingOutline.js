import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>charging</title><g id=Layer_2 data-name="Layer 2"><g id=charging><g id=charging-2 data-name=charging><path d=M21,9a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V10A1,1,0,0,0,21,9Z></path><path d=M15.83,6h-3.1L11.59,8h4.23a.5.5,0,0,1,.18.43v7.14a.52.52,0,0,1-.17.43H13l-1.15,2h4A2.31,2.31,0,0,0,18,15.57V8.43A2.31,2.31,0,0,0,15.83,6Z></path><path d=M4,15.57V8.43A.53.53,0,0,1,4.17,8H7L8.13,6h-4A2.31,2.31,0,0,0,2,8.43v7.14A2.31,2.31,0,0,0,4.17,18h3.1l1.14-2H4.18A.5.5,0,0,1,4,15.57Z></path><path d=M9,20a1,1,0,0,1-.87-1.5L11.28,13H7a1,1,0,0,1-.86-.5,1,1,0,0,1,0-1l4-7a1,1,0,0,1,1.74,1L8.72,11H13a1,1,0,0,1,.86.5,1,1,0,0,1,0,1l-4,7A1,1,0,0,1,9,20Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineChargingOutline(props) {
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