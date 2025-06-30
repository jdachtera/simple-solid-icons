import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M417.84,448a16,16,0,0,1-11.35-4.72L40.65,75.28a16,16,0,1,1,22.7-22.56l365.83,368A16,16,0,0,1,417.84,448Z></path><path d=M364.92,80c-44.09,0-74.61,24.82-92.39,45.5a6,6,0,0,1-9.06,0C245.69,104.82,215.16,80,171.08,80a107.71,107.71,0,0,0-31,4.54l269.13,270.7c3-3.44,5.7-6.64,8.14-9.6,40-48.75,59.15-98.79,58.61-153C475.37,130.53,425.54,80,364.92,80Z></path><path d=M69,149.15a115.06,115.06,0,0,0-9,43.49c-.54,54.21,18.63,104.25,58.61,153,18.77,22.87,52.8,59.45,131.39,112.8a31.88,31.88,0,0,0,36,0c20.35-13.82,37.7-26.5,52.58-38.12Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonHeartDislike(props) {
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