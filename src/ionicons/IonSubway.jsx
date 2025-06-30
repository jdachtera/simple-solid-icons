import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M352,16H160A64.07,64.07,0,0,0,96,80V336a64.07,64.07,0,0,0,64,64H352a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,352,16ZM208,64h96a16,16,0,0,1,0,32H208a16,16,0,0,1,0-32ZM176,352a32,32,0,1,1,32-32A32,32,0,0,1,176,352Zm160,0a32,32,0,1,1,32-32A32,32,0,0,1,336,352Zm48-160a16,16,0,0,1-16,16H144a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16H368a16,16,0,0,1,16,16Z></path><path d=M347.31,420.69a16,16,0,0,0-22.62,22.62l4.68,4.69H182.63l4.68-4.69a16,16,0,0,0-22.62-22.62l-48,48a16,16,0,1,0,22.62,22.62L150.63,480H361.37l11.32,11.31a16,16,0,0,0,22.62-22.62Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonSubway(props) {
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