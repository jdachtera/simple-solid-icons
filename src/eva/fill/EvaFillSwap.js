import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>swap</title><g id=Layer_2 data-name="Layer 2"><g id=swap><g id=swap-2 data-name=swap><path d=M4,9H17l-1.6,1.2a1,1,0,0,0-.2,1.4,1,1,0,0,0,.8.4,1,1,0,0,0,.6-.2l4-3a1,1,0,0,0,0-1.59l-3.86-3a1,1,0,0,0-1.23,1.58L17.08,7H4A1,1,0,0,0,4,9Z></path><path d=M20,16H7l1.6-1.2a1,1,0,0,0-1.2-1.6l-4,3a1,1,0,0,0,0,1.59l3.86,3a1,1,0,0,0,.61.21,1,1,0,0,0,.79-.39,1,1,0,0,0-.17-1.4L6.92,18H20a1,1,0,0,0,0-2Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillSwap(props) {
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