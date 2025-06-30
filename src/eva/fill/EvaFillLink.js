import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>link</title><g id=Layer_2 data-name="Layer 2"><g id=link><g id=link-2 data-name=link><path d=M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Z></path><path d=M9,16H7.21A4.13,4.13,0,0,1,3,12.37,4,4,0,0,1,7,8H9A1,1,0,0,0,9,6H7.21a6.15,6.15,0,0,0-6.16,5.21A6,6,0,0,0,7,18H9a1,1,0,0,0,0-2Z></path><path d=M23,11.24A6.16,6.16,0,0,0,16.76,6H15.25C14.44,6,14,6.45,14,7a1,1,0,0,0,1,1h1.79A4.13,4.13,0,0,1,21,11.63,4,4,0,0,1,17,16H15a1,1,0,0,0,0,2h2A6,6,0,0,0,23,11.24Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillLink(props) {
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