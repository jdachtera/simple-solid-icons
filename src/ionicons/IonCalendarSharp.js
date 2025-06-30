import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M32,456a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V176H32ZM352,212a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H356a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H356a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H276a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H196a4,4,0,0,1-4-4Zm-80-80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Zm0,80a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H116a4,4,0,0,1-4-4Z></path><path d=M456,64H400.08V32h-48V64H159.92V32h-48V64H56A23.8,23.8,0,0,0,32,87.77V144H480V87.77A23.8,23.8,0,0,0,456,64Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCalendarSharp(props) {
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