import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><circle fill=none stroke=currentColor stroke-linejoin=round stroke-width=32 cx=256 cy=56 r=40></circle><path fill=none stroke=currentColor stroke-linejoin=round stroke-width=32 d=M204.23,274.44c2.9-18.06,4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88,176.76c-12-4-23.21-10.7-24-23.94-1-17,14-28,29-24,0,0,88,31.14,163,31.14s162-31,162-31c18-5,30,9,30,23.79,0,14.21-11,19.21-24,23.94l-88,31.91c-8,3-21,9-26,18.18-6,10.75-5,29.53-2.1,47.59l5.9,29.63L351.21,467.9c2.8,13.15-6.3,25.44-19.4,27.74S308,489,304.12,476.28L266.56,360.35q-2.71-8.34-4.8-16.87L256,320l-5.3,21.65q-2.52,10.35-5.8,20.48L208,476.18c-4,12.85-14.5,21.75-27.6,19.46S158,480.05,160.94,467.9l37.39-163.83Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonAccessibilityOutline(props) {
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