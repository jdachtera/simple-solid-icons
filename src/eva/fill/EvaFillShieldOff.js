import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>shield-off</title><g id=Layer_2 data-name="Layer 2"><g id=shield-off><g id=shield-off-2 data-name=shield-off><path d=M3.73,6.56A2,2,0,0,0,3,8.09v.14a15.17,15.17,0,0,0,7.72,13.2l.3.17a2,2,0,0,0,2,0l.3-.17a15.22,15.22,0,0,0,3-2.27Z></path><path d=M18.84,16A15.08,15.08,0,0,0,21,8.23V8.09a2,2,0,0,0-1-1.75L13,2.4a2,2,0,0,0-2,0L7.32,4.49Z></path><path d=M4.71,3.29A1,1,0,0,0,3.29,4.71l16,16a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillShieldOff(props) {
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