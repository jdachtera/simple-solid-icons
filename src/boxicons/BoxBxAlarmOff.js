import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="m20.292 6.708-3.01-3 1.412-1.417 3.01 3zm1.415 13.585-2.287-2.287C20.409 16.563 21 14.838 21 13c0-4.879-4.121-9-9-9-1.838 0-3.563.591-5.006 1.58L5.91 4.496l.788-.79-1.416-1.412-.786.788-.789-.789-1.414 1.414 18 18 1.414-1.414zM12 6c3.794 0 7 3.206 7 7 0 1.292-.387 2.507-1.027 3.559L15.414 14H17v-2h-3.586L13 11.586V8h-2v1.586L8.441 7.027C9.493 6.387 10.708 6 12 6zM4.305 8.426A8.792 8.792 0 0 0 3 13c0 4.879 4.121 9 9 9a8.792 8.792 0 0 0 4.574-1.305l-1.461-1.461A6.801 6.801 0 0 1 12 20c-3.794 0-7-3.206-7-7 0-1.111.281-2.169.766-3.113L4.305 8.426z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: boxicons | License: MIT (<https://github.com/atisawd/boxicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function BoxBxAlarmOff(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
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