import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>code</title><g id=Layer_2 data-name="Layer 2"><g id=code><g id=code-2 data-name=code><path d=M8.64,5.23a1,1,0,0,0-1.41.13l-5,6a1,1,0,0,0,0,1.27l4.83,6a1,1,0,0,0,.78.37,1,1,0,0,0,.78-1.63L4.29,12,8.77,6.64A1,1,0,0,0,8.64,5.23Z></path><path d=M21.78,11.37,17,5.37a1,1,0,0,0-1.41-.15,1,1,0,0,0-.15,1.41L19.71,12l-4.48,5.37a1,1,0,0,0,.13,1.41A1,1,0,0,0,16,19a1,1,0,0,0,.77-.36l5-6A1,1,0,0,0,21.78,11.37Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillCode(props) {
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