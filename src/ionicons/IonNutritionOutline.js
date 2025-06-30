import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M352,128c-32.26-2.89-64,16-96,16s-63.75-19-96-16c-64,6-96,64-96,160,0,80,64,192,111.2,192s51.94-24,80.8-24,33.59,24,80.8,24S448,368,448,288C448,192,419,134,352,128Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></path><path d=M323.92,83.14c-21,21-45.66,27-58.82,28.79A8,8,0,0,1,256,103.2a97.6,97.6,0,0,1,28.61-59.33c22-22,46-26.9,58.72-27.85A8,8,0,0,1,352,24.94,98,98,0,0,1,323.92,83.14Z></path><ellipse cx=216 cy=304 rx=24 ry=48></ellipse><ellipse cx=296 cy=304 rx=24 ry=48>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonNutritionOutline(props) {
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