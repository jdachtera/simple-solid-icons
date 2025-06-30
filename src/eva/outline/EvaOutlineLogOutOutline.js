import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>log-out</title><g id=Layer_2 data-name="Layer 2"><g id=log-out><g id=log-out-2 data-name=log-out><path d=M7,6A1,1,0,0,0,7,4H5A1,1,0,0,0,4,5V19a1,1,0,0,0,1,1H7a1,1,0,0,0,0-2H6V6Z></path><path d=M20.82,11.42,18,7.42a1,1,0,0,0-1.39-.24,1,1,0,0,0-.24,1.4L18.09,11,18,11H10a1,1,0,0,0,0,2h8l-1.8,2.4a1,1,0,0,0,.2,1.4,1,1,0,0,0,.6.2,1,1,0,0,0,.8-.4l3-4A1,1,0,0,0,20.82,11.42Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineLogOutOutline(props) {
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