import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M414.39,113.61A222.26,222.26,0,0,0,278.06,49.07a8.09,8.09,0,0,1-6.88-5.62,15.79,15.79,0,0,0-30.36,0,8.09,8.09,0,0,1-6.88,5.62A224,224,0,0,0,32,271.52a16.41,16.41,0,0,0,7.24,13.87,16,16,0,0,0,20.07-2.08,51.89,51.89,0,0,1,73.31-.06,15.94,15.94,0,0,0,22.6.15,62.59,62.59,0,0,1,81.49-5.87h0a8.24,8.24,0,0,1,3.29,6.59V431.54c0,8.6-6.6,16-15.19,16.44A16,16,0,0,1,208,432a16,16,0,0,0-16.29-16c-9,.16-15.9,8.11-15.7,17.1A48.06,48.06,0,0,0,223.38,480c26.88.34,48.62-21.93,48.62-48.81V284.12a8.24,8.24,0,0,1,3.29-6.59h0a62.59,62.59,0,0,1,81.4,5.78,16,16,0,0,0,22.62,0,51.91,51.91,0,0,1,73.38,0,16,16,0,0,0,19.54,2.41A16.4,16.4,0,0,0,480,271.51,222.54,222.54,0,0,0,414.39,113.61Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonUmbrella(props) {
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