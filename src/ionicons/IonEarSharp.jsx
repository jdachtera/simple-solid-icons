import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M380.48,68.09C347.09,34.5,302.88,16,256,16,159,16,80,95,80,192V398.57a97.59,97.59,0,0,0,28,68.49A94.49,94.49,0,0,0,176,496c19.93,0,41.06-7.69,62.8-22.87a181.46,181.46,0,0,0,25.88-21.86C327.37,390.16,432,288.06,432,192,432,145.51,413.71,101.51,380.48,68.09ZM368,200H336V184c0-39.7-35.89-72-80-72s-80,32.3-80,72v30.41c27.5-7.84,59.89-6.62,64.26-6.41a48,48,0,0,1,38.62,75.9c-.3.41-.61.81-.95,1.2-16.55,19-36,45.49-38.46,55l-4.07,15.47-30.94-8.14,4.07-15.47c5.51-20.94,36.93-58.2,44.66-67.15A16,16,0,0,0,239.82,240l-.88,0c-10.67-.58-42.66-.25-62.12,8l-.82.35V320H144V184c0-57.35,50.24-104,112-104s112,46.65,112,104Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonEarSharp(props) {
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