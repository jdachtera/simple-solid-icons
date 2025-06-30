import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>checkmark-square</title><g id=Layer_2 data-name="Layer 2"><g id=checkmark-square><g id=checkmark-square-2 data-name=checkmark-square><path d=M20,11.83a1,1,0,0,0-1,1V18.4a.6.6,0,0,1-.6.6H5.6a.6.6,0,0,1-.6-.6V5.6A.6.6,0,0,1,5.6,5h9.57a1,1,0,1,0,0-2H5.6A2.61,2.61,0,0,0,3,5.6V18.4A2.61,2.61,0,0,0,5.6,21H18.4A2.61,2.61,0,0,0,21,18.4V12.83A1,1,0,0,0,20,11.83Z></path><path d=M10.72,11a1,1,0,0,0-1.44,1.38l2.22,2.33a1,1,0,0,0,.72.31h0a1,1,0,0,0,.72-.3l6.78-7a1,1,0,1,0-1.44-1.4l-6.05,6.26Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillCheckmarkSquare(props) {
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