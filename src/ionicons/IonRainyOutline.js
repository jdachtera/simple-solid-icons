import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M114.61,162.85A16.07,16.07,0,0,0,128,149.6C140.09,76.17,193.63,32,256,32c57.93,0,96.62,37.75,112.2,77.74a15.84,15.84,0,0,0,12.2,9.87c50,8.15,91.6,41.54,91.6,99.59C472,278.6,423.4,320,364,320H130c-49.5,0-90-24.7-90-79.2C40,192.33,78.67,168.58,114.61,162.85Z style=fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px></path><line x1=144 y1=384 x2=112 y2=432 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><line x1=224 y1=384 x2=160 y2=480 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><line x1=304 y1=384 x2=272 y2=432 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><line x1=384 y1=384 x2=320 y2=480 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonRainyOutline(props) {
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