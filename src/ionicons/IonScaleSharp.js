import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M432,32H80A48.05,48.05,0,0,0,32,80V432a48.05,48.05,0,0,0,48,48H432a48.05,48.05,0,0,0,48-48V80A48.05,48.05,0,0,0,432,32ZM415.29,197l-52.46,61.73a27.83,27.83,0,0,1-37.65,4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18,15.6-69.18,24.89a27.84,27.84,0,0,1-37.65-4.62L96.71,197A32.12,32.12,0,0,1,97.13,155c18.93-21.31,72.3-70.87,158.87-70.87S395.94,133.72,414.87,155h0A32.12,32.12,0,0,1,415.29,197Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonScaleSharp(props) {
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