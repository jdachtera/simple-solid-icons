import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>at</title><g id=Layer_2 data-name="Layer 2"><g id=at><g id=at-2 data-name=at><path d=M13,2a10,10,0,0,0-5,19.1A10.15,10.15,0,0,0,12,22a10,10,0,0,0,6.08-2.06,1,1,0,0,0,.19-1.4,1,1,0,0,0-1.41-.19A8,8,0,1,1,12.77,4,8.17,8.17,0,0,1,20,12.22v.68a1.71,1.71,0,0,1-1.78,1.7,1.82,1.82,0,0,1-1.62-1.88V8.4a1,1,0,0,0-1-1,1,1,0,0,0-1,.87,5,5,0,0,0-3.44-1.36A5.09,5.09,0,1,0,15.31,15a3.6,3.6,0,0,0,5.55.61A3.67,3.67,0,0,0,22,12.9v-.68A10.2,10.2,0,0,0,13,2ZM11.18,15.09A3.09,3.09,0,1,1,14.27,12,3.1,3.1,0,0,1,11.18,15.09Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineAtOutline(props) {
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