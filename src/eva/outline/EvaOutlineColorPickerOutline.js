import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>color-picker</title><g id=Layer_2 data-name="Layer 2"><g id=color-picker><g id=color-picker-2 data-name=color-picker><path d=M19.4,7.34,16.66,4.6A1.92,1.92,0,0,0,14,4.53l-2,2L10.71,5.29A1,1,0,0,0,9.29,6.71L10.53,8,5,13.53a2,2,0,0,0-.57,1.21L4,18.91a1,1,0,0,0,.29.8A1,1,0,0,0,5,20h.09l4.17-.38a2,2,0,0,0,1.21-.57l5.58-5.58,1.24,1.24a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-1.24-1.24,2-2A1.92,1.92,0,0,0,19.4,7.34ZM9.08,17.62l-3,.28.27-3L12,9.36l2.69,2.7Zm7-7L13.36,8,15.27,6,18,8.73Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineColorPickerOutline(props) {
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