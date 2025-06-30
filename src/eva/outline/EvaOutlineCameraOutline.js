import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>camera</title><g id=Layer_2 data-name="Layer 2"><g id=camera><g id=camera-2 data-name=camera><path d=M19,7H16V5.5A2.5,2.5,0,0,0,13.5,3h-3A2.5,2.5,0,0,0,8,5.5V7H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM10,5.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V7H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10A1,1,0,0,1,5,9H19a1,1,0,0,1,1,1Z></path><path d=M12,10.5A3.5,3.5,0,1,0,15.5,14,3.5,3.5,0,0,0,12,10.5Zm0,5A1.5,1.5,0,1,1,13.5,14,1.5,1.5,0,0,1,12,15.5Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineCameraOutline(props) {
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