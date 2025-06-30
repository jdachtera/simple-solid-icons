import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM192.13,260.18a64,64,0,1,1,59.69,59.69A64.07,64.07,0,0,1,192.13,260.18Zm240-66.64-96.37,5.84a4.06,4.06,0,0,1-3.44-1.59,96,96,0,0,0-18.07-18.07,4.06,4.06,0,0,1-1.59-3.44l5.84-96.37a4,4,0,0,1,5.42-3.51A193,193,0,0,1,435.6,188.12,4,4,0,0,1,432.09,193.54ZM193.54,79.91l5.84,96.37a4.06,4.06,0,0,1-1.59,3.44,96,96,0,0,0-18.07,18.07,4.06,4.06,0,0,1-3.44,1.59l-96.37-5.84a4,4,0,0,1-3.51-5.42A193,193,0,0,1,188.12,76.4,4,4,0,0,1,193.54,79.91ZM79.91,318.46l96.37-5.84a4.06,4.06,0,0,1,3.44,1.59,96,96,0,0,0,18.07,18.07,4.06,4.06,0,0,1,1.59,3.44l-5.84,96.37a4,4,0,0,1-5.42,3.51A193,193,0,0,1,76.4,323.88,4,4,0,0,1,79.91,318.46ZM318.46,432.09l-5.84-96.37a4.06,4.06,0,0,1,1.59-3.44,96,96,0,0,0,18.07-18.07,4.06,4.06,0,0,1,3.44-1.59l96.37,5.84a4,4,0,0,1,3.51,5.42A193,193,0,0,1,323.88,435.6,4,4,0,0,1,318.46,432.09Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonHelpBuoy(props) {
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