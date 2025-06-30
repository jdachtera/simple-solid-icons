import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M79.2,211.44h0c15.52-8.82,34.91-2.28,43.31,13.68l41.38,84.41a7,7,0,0,0,8.93,3.43h0a7,7,0,0,0,4.41-6.52V72c0-13.91,12.85-24,26.77-24s26,10.09,26,24V228.64A11.24,11.24,0,0,0,240.79,240,11,11,0,0,0,252,229V24c0-13.91,10.94-24,24.86-24S302,10.09,302,24V228.64A11.24,11.24,0,0,0,312.79,240,11,11,0,0,0,324,229V56c0-13.91,12.08-24,26-24s26,11.09,26,25V244.64A11.24,11.24,0,0,0,386.79,256,11,11,0,0,0,398,245V120c0-13.91,11.08-24,25-24s25.12,10.22,25,24V336c0,117.41-72,176-160,176H272c-88,0-115.71-39.6-136-88L67.33,255C60.67,237,63.69,220.25,79.2,211.44Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonHandRight(props) {
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