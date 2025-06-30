import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>settings-2</title><g id=Layer_2 data-name="Layer 2"><g id=settings-2><g id=settings-2-2 data-name=settings-2><circle cx=12 cy=12 r=1.5></circle><path d=M20.32,9.37H19.23c-.14,0-.24-.11-.3-.26a.34.34,0,0,1,0-.37L19.74,8a1.63,1.63,0,0,0,.5-1.18,1.67,1.67,0,0,0-.5-1.19L18.4,4.26a1.67,1.67,0,0,0-2.37,0L15.26,5a.38.38,0,0,1-.41,0,.34.34,0,0,1-.22-.29V3.68A1.68,1.68,0,0,0,13,2H11.06A1.69,1.69,0,0,0,9.37,3.68V4.77c0,.14-.11.24-.26.3a.34.34,0,0,1-.37,0L8,4.26a1.72,1.72,0,0,0-1.19-.5h0a1.65,1.65,0,0,0-1.18.5L4.26,5.6A1.67,1.67,0,0,0,4.26,8L5,8.74a.38.38,0,0,1,0,.41.34.34,0,0,1-.29.22H3.68A1.68,1.68,0,0,0,2,11.05v1.89a1.69,1.69,0,0,0,1.68,1.69H4.77c.14,0,.24.11.3.26a.34.34,0,0,1,0,.37L4.26,16a1.72,1.72,0,0,0-.5,1.19,1.66,1.66,0,0,0,.5,1.19L5.6,19.74a1.67,1.67,0,0,0,2.37,0L8.74,19a.38.38,0,0,1,.41,0,.34.34,0,0,1,.22.29v1.09A1.68,1.68,0,0,0,11.05,22h1.89a1.69,1.69,0,0,0,1.69-1.68V19.23c0-.14.11-.24.26-.3a.34.34,0,0,1,.37,0l.76.77a1.72,1.72,0,0,0,1.19.5h0a1.65,1.65,0,0,0,1.18-.5l1.34-1.34a1.67,1.67,0,0,0,0-2.37L19,15.26a.34.34,0,0,1,0-.37v0a.34.34,0,0,1,.29-.22h1.09A1.68,1.68,0,0,0,22,13V11.06A1.69,1.69,0,0,0,20.32,9.37ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillSettings2(props) {
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