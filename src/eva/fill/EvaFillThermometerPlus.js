import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>thermometer-plus</title><g id=Layer_2 data-name="Layer 2"><g id=thermometer-plus><g id=thermometer-plus-2 data-name=thermometer-plus><rect x=2 y=5 width=6 height=2 rx=1 ry=1></rect><rect x=2 y=5 width=6 height=2 rx=1 ry=1 transform="translate(-1 11) rotate(-90)"></rect><path d=M14,22a5,5,0,0,1-3-9V5a3,3,0,0,1,3-3,3,3,0,0,1,3,3v8a5,5,0,0,1-3,9ZM15,9.54V5a.93.93,0,0,0-.29-.69A1,1,0,0,0,14,4a1,1,0,0,0-1,1V9.54Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillThermometerPlus(props) {
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