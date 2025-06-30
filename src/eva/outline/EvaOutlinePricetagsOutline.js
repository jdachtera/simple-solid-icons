import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>pricetags</title><g id=Layer_2 data-name="Layer 2"><g id=pricetags><g id=pricetags-2 data-name=pricetags><path d=M12.87,22a1.84,1.84,0,0,1-1.29-.53L5.17,15.05a1,1,0,0,1-.29-.61L4,5.09a1,1,0,0,1,.29-.8A1,1,0,0,1,5.09,4l9.35.88a1,1,0,0,1,.61.29l6.42,6.41a1.82,1.82,0,0,1,0,2.57l-7.32,7.32A1.82,1.82,0,0,1,12.87,22Zm-6-8.11,6,6,7.05-7.05-6-6L6.11,6.11Z></path><circle cx=10.5 cy=10.5 r=1.5>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlinePricetagsOutline(props) {
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