import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><rect x=32 y=80 width=448 height=256 rx=16 ry=16 transform="translate(512 416) rotate(180)"style=fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px></rect><line x1=64 y1=384 x2=448 y2=384 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><line x1=96 y1=432 x2=416 y2=432 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><circle cx=256 cy=208 r=80 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></circle><path d=M480,160a80,80,0,0,1-80-80 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></path><path d=M32,160a80,80,0,0,0,80-80 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></path><path d=M480,256a80,80,0,0,0-80,80 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></path><path d=M32,256a80,80,0,0,1,80,80 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCashOutline(props) {
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