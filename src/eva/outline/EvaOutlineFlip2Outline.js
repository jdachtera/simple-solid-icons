import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>flip-2</title><g id=Layer_2 data-name="Layer 2"><g id=flip-2><g id=flip-2-2 data-name=flip-2><path d=M6.09,19h12l-1.3,1.29a1,1,0,0,0,1.42,1.42l3-3a1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.42L18.09,17h-12A1.56,1.56,0,0,1,4.5,15.47V13a1,1,0,0,0-2,0v2.47A3.56,3.56,0,0,0,6.09,19Z></path><path d=M5.79,9.71A1,1,0,1,0,7.21,8.29L5.91,7h12A1.56,1.56,0,0,1,19.5,8.53V11a1,1,0,0,0,2,0V8.53A3.56,3.56,0,0,0,17.91,5h-12l1.3-1.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,0,1.42Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineFlip2Outline(props) {
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