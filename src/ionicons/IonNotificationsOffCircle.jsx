import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM146.83,313c16.33-19.34,27.86-27.47,27.86-80.8q0-3.75.2-7.26a4,4,0,0,1,7-2.52l98,106.87a4,4,0,0,1-2.94,6.7H158C146.18,336,140.06,321,146.83,313Zm148.93,43.41C293.53,375.14,276.92,384,256,384s-37.51-8.86-39.75-27.58a4,4,0,0,1,4-4.42h71.53A4,4,0,0,1,295.76,356.42Zm67,17.42a16,16,0,0,1-22.6-1.08l-192-212a16,16,0,0,1,23.68-21.52l192,212A16,16,0,0,1,362.76,373.84ZM361,323.21,216.49,165.53a4,4,0,0,1,1.3-6.36c1.31-.58,2.61-1.12,3.89-1.63a11.33,11.33,0,0,0,6.32-6.68C231.72,138.6,242.15,128,256,128s24.29,10.6,28,22.86a11.34,11.34,0,0,0,6.34,6.68c21.21,8.44,47,25.81,47,74.67,0,53.33,11.54,61.46,27.87,80.8a12.09,12.09,0,0,1,2.76,7.25A4,4,0,0,1,361,323.21Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonNotificationsOffCircle(props) {
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