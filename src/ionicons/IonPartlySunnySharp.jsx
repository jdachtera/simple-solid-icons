import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M340,480H106c-29.5,0-54.92-7.83-73.53-22.64C11.23,440.44,0,415.35,0,384.8c0-26.66,10.08-49.8,29.14-66.91,15.24-13.68,36.17-23.21,59-26.84h0c.06,0,.08,0,.09-.05,6.44-39,23.83-72.09,50.31-95.68A140.24,140.24,0,0,1,232,160c30.23,0,58.48,9.39,81.71,27.17a142.69,142.69,0,0,1,45.36,60.66c29.41,4.82,54.72,17.11,73.19,35.54C453,304.11,464,331.71,464,363.2c0,32.85-13.13,62.87-37,84.52C404.11,468.54,373.2,480,340,480Zm19-232.18Z></path><path d=M381.5,219.89a169.23,169.23,0,0,1,45.44,19A96,96,0,0,0,281,129.33q-2.85,2-5.54,4.2a162.47,162.47,0,0,1,57.73,28.23A174.53,174.53,0,0,1,381.5,219.89Z></path><rect x=448 y=192 width=64 height=32></rect><rect x=320 y=32 width=32 height=64></rect><path d=M255.35,129.63l12.45-12.45L223.18,72.55,200.55,95.18l33.17,33.17h.6A172,172,0,0,1,255.35,129.63Z></path><rect x=406.27 y=90.18 width=63.11 height=32 transform="translate(53.16 340.68) rotate(-45)">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonPartlySunnySharp(props) {
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