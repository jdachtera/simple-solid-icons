import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>bulb</title><g id=Layer_2 data-name="Layer 2"><g id=bulb><g id=bulb-2 data-name=bulb><path d=M12,7a5,5,0,0,0-3,9v4a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V16a5,5,0,0,0-3-9Z></path><path d=M12,6a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V5A1,1,0,0,0,12,6Z></path><path d=M21,11H19a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z></path><path d=M5,11H3a1,1,0,0,0,0,2H5a1,1,0,0,0,0-2Z></path><path d=M7.66,6.42,6.22,5A1,1,0,0,0,4.83,6.47L6.27,7.86A1,1,0,0,0,7,8.14a1,1,0,0,0,.72-.31A1,1,0,0,0,7.66,6.42Z></path><path d=M19.19,5.05a1,1,0,0,0-1.41,0L16.34,6.42a1,1,0,0,0,0,1.41,1,1,0,0,0,.72.31,1,1,0,0,0,.69-.28l1.44-1.39A1,1,0,0,0,19.19,5.05Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillBulb(props) {
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