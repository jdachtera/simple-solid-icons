import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M421.83,293.82A144,144,0,0,0,218.18,90.17 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></path><path d=M353.94,225.94a48,48,0,0,0-67.88-67.88 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></path><line x1=192 y1=464 x2=192 y2=416 style=stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><line x1=90.18 y1=421.82 x2=124.12 y2=387.88 style=stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><line x1=48 y1=320 x2=96 y2=320 style=stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><path d=M286.06,158.06,172.92,271.19a32,32,0,0,1-45.25,0L105,248.57a32,32,0,0,1,0-45.26L218.18,90.17 style=fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px></path><path d=M421.83,293.82,308.69,407a32,32,0,0,1-45.26,0l-22.62-22.63a32,32,0,0,1,0-45.26L353.94,225.94 style=fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px></path><line x1=139.6 y1=169.98 x2=207.48 y2=237.87 style=fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px></line><line x1=275.36 y1=305.75 x2=343.25 y2=373.63 style=fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMagnetOutline(props) {
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