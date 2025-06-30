import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>rewind-right</title><g id=Layer_2 data-name="Layer 2"><g id=rewind-right><g id=rewind-right-2 data-name=rewind-right><path d=M20.86,10.67l-5.1-4.21a2.1,2.1,0,0,0-2.21-.26A1.76,1.76,0,0,0,12.5,7.79v2.59L7.76,6.46A2.1,2.1,0,0,0,5.55,6.2a1.76,1.76,0,0,0-1,1.59v8.42a1.76,1.76,0,0,0,1,1.59,2.23,2.23,0,0,0,.91.2,2.06,2.06,0,0,0,1.3-.46l4.74-3.92v2.59a1.76,1.76,0,0,0,1.05,1.59,2.23,2.23,0,0,0,.91.2,2.06,2.06,0,0,0,1.3-.46l5.1-4.21a1.7,1.7,0,0,0,0-2.66ZM6.5,15.91V8l4.82,4Zm8,0V8l4.82,4Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineRewindRightOutline(props) {
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