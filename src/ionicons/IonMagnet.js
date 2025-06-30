import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><line x1=191.98 y1=463.79 x2=191.98 y2=415.79 style=stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><line x1=90.16 y1=421.61 x2=124.1 y2=387.67 style=stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><line x1=47.98 y1=319.79 x2=95.98 y2=319.79 style=stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><path d=M267.56,312.32l-31.11,31.11a16,16,0,0,0,0,22.63l45.26,45.25a16,16,0,0,0,22.62,0l31.12-31.11a4,4,0,0,0,0-5.66l-62.23-62.22A4,4,0,0,0,267.56,312.32Z></path><path d=M131.8,176.55l-31.11,31.12a16,16,0,0,0,0,22.62l45.25,45.26a16,16,0,0,0,22.63,0l31.11-31.11a4,4,0,0,0,0-5.66l-62.22-62.23A4,4,0,0,0,131.8,176.55Z></path><path d=M428.85,83.28a144,144,0,0,0-203.71-.06l-65.06,65.05a4,4,0,0,0,0,5.66l62.23,62.22a4,4,0,0,0,5.66,0l65-65.05a48,48,0,0,1,68.46.59c18.3,18.92,17.47,49.24-1.14,67.85L295.85,284a4,4,0,0,0,0,5.66l62.22,62.23a4,4,0,0,0,5.66,0l64.08-64.08C484.18,231.47,485.18,139.68,428.85,83.28Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMagnet(props) {
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