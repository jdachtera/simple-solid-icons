import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M391,307.27c32.75-46.35,46.59-101.63,39-155.68h0C416.47,55.59,327.38-11.54,231.38,2S68.24,104.53,81.73,200.53c7.57,53.89,36.12,103.16,80.37,138.74,26.91,21.64,57.59,36.1,86.05,41.33l-8.36,45.23a8,8,0,0,0,9,9.38L279,431c15.9,35.87,41.65,60.48,78.41,75l14.88,5.88,11.77-29.75-14.88-5.89c-26.35-10.42-44.48-26.16-57-49.92l21.84-3.07a8,8,0,0,0,6.05-11.49l-20.49-41.16C345.56,357.73,371.07,335.42,391,307.27ZM230.18,322.93c-41.26-16.32-76.3-52.7-91.45-94.94l-5.4-15.06,30.12-10.8,5.4,15.06c14.5,40.44,47.27,65.77,73.1,76l14.88,5.88-11.77,29.76Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBalloonSharp(props) {
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