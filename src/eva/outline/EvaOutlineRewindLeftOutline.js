import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>rewind-left</title><g id=Layer_2 data-name="Layer 2"><g id=rewind-left><g id=rewind-left-2 data-name=rewind-left><path d=M18.45,6.2a2.1,2.1,0,0,0-2.21.26L11.5,10.38V7.79A1.76,1.76,0,0,0,10.45,6.2a2.1,2.1,0,0,0-2.21.26l-5.1,4.21a1.7,1.7,0,0,0,0,2.66l5.1,4.21a2.06,2.06,0,0,0,1.3.46,2.23,2.23,0,0,0,.91-.2,1.76,1.76,0,0,0,1.05-1.59V13.62l4.74,3.92a2.06,2.06,0,0,0,1.3.46,2.23,2.23,0,0,0,.91-.2,1.76,1.76,0,0,0,1.05-1.59V7.79A1.76,1.76,0,0,0,18.45,6.2ZM9.5,16,4.68,12,9.5,8.09Zm8,0-4.82-4L17.5,8.09Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineRewindLeftOutline(props) {
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