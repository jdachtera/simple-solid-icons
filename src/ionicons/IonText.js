import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M292.6,407.78l-120-320a22,22,0,0,0-41.2,0l-120,320a22,22,0,0,0,41.2,15.44L88.76,326.8a2,2,0,0,1,1.87-1.3H213.37a2,2,0,0,1,1.87,1.3l36.16,96.42a22,22,0,0,0,41.2-15.44Zm-185.84-129,43.37-115.65a2,2,0,0,1,3.74,0L197.24,278.8a2,2,0,0,1-1.87,2.7H108.63A2,2,0,0,1,106.76,278.8Z></path><path d=M400.77,169.5c-41.72-.3-79.08,23.87-95,61.4a22,22,0,0,0,40.5,17.2c8.88-20.89,29.77-34.44,53.32-34.6C431.91,213.28,458,240,458,272.35h0a1.5,1.5,0,0,1-1.45,1.5c-21.92.61-47.92,2.07-71.12,4.8C330.68,285.09,298,314.94,298,358.5c0,23.19,8.76,44,24.67,58.68C337.6,430.93,358,438.5,380,438.5c31,0,57.69-8,77.94-23.22,0,0,.06,0,.06,0h0a22,22,0,1,0,44,.19v-143C502,216.29,457,169.91,400.77,169.5ZM380,394.5c-17.53,0-38-9.43-38-36,0-10.67,3.83-18.14,12.43-24.23,8.37-5.93,21.2-10.16,36.14-11.92,21.12-2.49,44.82-3.86,65.14-4.47a2,2,0,0,1,2,2.1C455,370.1,429.46,394.5,380,394.5Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonText(props) {
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