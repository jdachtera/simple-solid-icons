import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M438.71,159.43c-17.6-28.31-45.5-43.8-85.28-47.37-22.82-2-50.23,4.94-72.25,10.55C271.26,125.14,260,128,256,128s-15.18-2.86-25-5.39c-22.08-5.65-49.56-12.69-72.45-10.54-38.53,3.61-66,19.19-84,47.62S48,229,48,288c0,61.28,29.53,114.58,47.13,140.89C116.82,461.34,149.25,496,175.2,496c18.57,0,34.12-7.23,47.82-13.64C243,473,256,472,256,472s11,0,31.94,10.11C301.65,488.73,317.3,496,336.8,496c26.58,0,59.08-34.69,80.63-67.15C434.82,402.65,464,349.52,464,288,464,228,456,187.17,438.71,159.43ZM216,352c-13.25,0-24-21.49-24-48s10.75-48,24-48,24,21.49,24,48S229.25,352,216,352Zm80,0c-13.25,0-24-21.49-24-48s10.75-48,24-48,24,21.49,24,48S309.25,352,296,352Z></path><path d=M323.72,82.76C353.68,52.82,352,16.18,352,16.14h0s-35.77-3.76-67.23,27.67S256.06,112,256.06,112,293.74,112.71,323.72,82.76Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonNutritionSharp(props) {
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