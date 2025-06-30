import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>paper-plane</title><g id=Layer_2 data-name="Layer 2"><g id=paper-plane><g id=paper-plane-2 data-name=paper-plane><path d=M21,4a1.31,1.31,0,0,0-.06-.27l0-.09a1,1,0,0,0-.2-.3,1,1,0,0,0-.29-.19l-.09,0A.86.86,0,0,0,20.05,3H20a1,1,0,0,0-.3,0l-18,6a1,1,0,0,0,0,1.9l8.53,2.84,2.84,8.53a1,1,0,0,0,1.9,0l6-18A1,1,0,0,0,21,4ZM16.3,6.29l-5.57,5.57L5.16,10ZM14,18.84l-1.86-5.57L17.71,7.7Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillPaperPlane(props) {
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