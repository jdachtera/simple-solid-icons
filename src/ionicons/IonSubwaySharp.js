import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M392,16H120A24,24,0,0,0,96,40V376a24,24,0,0,0,24,24H392a24,24,0,0,0,24-24V40A24,24,0,0,0,392,16ZM208,64h95.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,96H208.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,208,64ZM179.47,351.82a32,32,0,1,1,28.35-28.35A32,32,0,0,1,179.47,351.82Zm160,0a32,32,0,1,1,28.35-28.35A32,32,0,0,1,339.47,351.82ZM384,144v64H128V144Z></path><polygon points="298 416 329.37 448 182.63 448 214 416 170 416 89.43 496 134.63 496 150.63 480 361.37 480 377.37 496 422.67 496 343 416 298 416">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonSubwaySharp(props) {
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