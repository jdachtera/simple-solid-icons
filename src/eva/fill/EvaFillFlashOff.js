import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>flash-off</title><g id=Layer_2 data-name="Layer 2"><g id=flash-off><g id=flash-off-2 data-name=flash-off><path d=M17.33,14.5l2.5-3.74A1,1,0,0,0,19,9.2H13.11l.77-7.09a1,1,0,0,0-.65-1,1,1,0,0,0-1.17.38L8.94,6.11Z></path><path d=M6.67,9.5l-2.5,3.74A1,1,0,0,0,5,14.8h5.89l-.77,7.09a1,1,0,0,0,.65,1.05,1,1,0,0,0,.34.06,1,1,0,0,0,.83-.44l3.12-4.67Z></path><path d=M20.71,19.29l-16-16A1,1,0,0,0,3.29,4.71l16,16a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillFlashOff(props) {
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