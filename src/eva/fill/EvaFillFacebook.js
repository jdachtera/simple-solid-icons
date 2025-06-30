import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>facebook</title><g id=Layer_2 data-name="Layer 2"><g id=facebook><g id=facebook-2 data-name=facebook><path d=M17,3.5a.5.5,0,0,0-.5-.5H14A4.77,4.77,0,0,0,9,7.5v2.7H6.5a.5.5,0,0,0-.5.5v2.6a.5.5,0,0,0,.5.5H9v6.7a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5V13.8h2.62a.5.5,0,0,0,.49-.37l.72-2.6a.5.5,0,0,0-.48-.63H13V7.5a1,1,0,0,1,1-.9h2.5a.5.5,0,0,0,.5-.5Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillFacebook(props) {
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