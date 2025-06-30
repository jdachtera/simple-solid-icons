import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M416.07,272a160,160,0,1,0-160,160A160,160,0,0,0,416.07,272Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></path><path d=M142.12,91.21A46.67,46.67,0,0,0,112,80l-2.79.08C83.66,81.62,64,104,64.07,131c0,13.21,4.66,19.37,10.88,27.23A4.55,4.55,0,0,0,78.19,160h.88a3.23,3.23,0,0,0,2.54-1.31L142.38,99a5.38,5.38,0,0,0,1.55-4A5.26,5.26,0,0,0,142.12,91.21Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></path><path d=M369.88,91.21A46.67,46.67,0,0,1,400,80l2.79.08C428.34,81.62,448,104,447.93,131c0,13.21-4.66,19.37-10.88,27.23a4.55,4.55,0,0,1-3.24,1.76h-.88a3.23,3.23,0,0,1-2.54-1.31L369.62,99a5.38,5.38,0,0,1-1.55-4A5.26,5.26,0,0,1,369.88,91.21Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></path><polyline points="256.07 160 256.07 272 176.07 272"style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></polyline><line x1=416.07 y1=432 x2=376.07 y2=392 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><line x1=96.07 y1=432 x2=136.07 y2=392 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonAlarmOutline(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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