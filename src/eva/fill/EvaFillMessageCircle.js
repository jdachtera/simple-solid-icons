import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>message-circle</title><g id=Layer_2 data-name="Layer 2"><g id=message-circle><g id=message-circle-2 data-name=message-circle><path d=M19.07,4.93a10,10,0,0,0-16.28,11,1.06,1.06,0,0,1,.09.64L2,20.8a1,1,0,0,0,.27.91A1,1,0,0,0,3,22l.2,0,4.28-.86a1.26,1.26,0,0,1,.64.09,10,10,0,0,0,11-16.28ZM8,13a1,1,0,1,1,1-1A1,1,0,0,1,8,13Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,13Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,13Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillMessageCircle(props) {
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