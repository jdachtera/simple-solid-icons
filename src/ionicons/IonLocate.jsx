import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><line x1=256 y1=96 x2=256 y2=56 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px></line><line x1=256 y1=456 x2=256 y2=416 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px></line><path d=M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px></path><line x1=416 y1=256 x2=456 y2=256 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px></line><line x1=56 y1=256 x2=96 y2=256 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonLocate(props) {
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