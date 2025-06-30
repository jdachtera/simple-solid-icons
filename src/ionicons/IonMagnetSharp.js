import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><line x1=191.98 y1=463.58 x2=191.98 y2=415.58 style=stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px></line><line x1=90.16 y1=421.4 x2=124.1 y2=387.46 style=stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px></line><line x1=47.98 y1=319.58 x2=95.98 y2=319.58 style=stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px></line><path d=M422.2,89.82a144,144,0,0,0-203.71-.07l-67.88,67.88,67.88,67.89,67.88-67.89a48,48,0,0,1,68.46.59c18.3,18.92,17.48,49.24-1.14,67.86L286.37,293.4l67.88,67.88,66.91-66.91C477.53,238,478.53,146.22,422.2,89.82Z></path><rect x=107.29 y=188.83 width=64 height=96 transform="translate(-126.67 167.86) rotate(-45)"></rect><rect x=243.06 y=324.59 width=64 height=96 transform="translate(-182.9 303.62) rotate(-45)">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMagnetSharp(props) {
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