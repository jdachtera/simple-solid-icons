import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>copy</title><g id=Layer_2 data-name="Layer 2"><g id=copy><g id=copy-2 data-name=copy><path d=M18,9H15V5.67A2.68,2.68,0,0,0,12.33,3H5.67A2.68,2.68,0,0,0,3,5.67v6.66A2.68,2.68,0,0,0,5.67,15H9v3a3,3,0,0,0,3,3h6a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9ZM9,12v1H5.67A.67.67,0,0,1,5,12.33V5.67A.67.67,0,0,1,5.67,5h6.66a.67.67,0,0,1,.67.67V9H12A3,3,0,0,0,9,12Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillCopy(props) {
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