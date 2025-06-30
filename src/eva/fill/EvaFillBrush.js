import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>brush</title><g id=Layer_2 data-name="Layer 2"><g id=brush><g id=brush-2 data-name=brush><path d=M7.12,12.55a4,4,0,0,0-3.07,3.86l0,3.11a.47.47,0,0,0,.48.48l3.24-.06h0a3.78,3.78,0,0,0,3.44-2.2A3.65,3.65,0,0,0,7.12,12.55Z></path><path d=M19.26,4.46a2.14,2.14,0,0,0-2.88.21L10,11.08a.47.47,0,0,0,0,.66L12.25,14a.47.47,0,0,0,.66,0L19.4,7.53A2.06,2.06,0,0,0,20,6.06,2,2,0,0,0,19.26,4.46Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillBrush(props) {
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