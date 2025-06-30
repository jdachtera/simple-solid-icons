import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><rect fill=none stroke=currentColor stroke-linejoin=round stroke-width=32 x=48 y=80 width=416 height=384 rx=48></rect><circle cx=296 cy=232 r=24></circle><circle cx=376 cy=232 r=24></circle><circle cx=296 cy=312 r=24></circle><circle cx=376 cy=312 r=24></circle><circle cx=136 cy=312 r=24></circle><circle cx=216 cy=312 r=24></circle><circle cx=136 cy=392 r=24></circle><circle cx=216 cy=392 r=24></circle><circle cx=296 cy=392 r=24></circle><line fill=none stroke=currentColor stroke-linejoin=round stroke-width=32 stroke-linecap=round x1=128 y1=48 x2=128 y2=80></line><line fill=none stroke=currentColor stroke-linejoin=round stroke-width=32 stroke-linecap=round x1=384 y1=48 x2=384 y2=80></line><line fill=none stroke=currentColor stroke-linejoin=round stroke-width=32 x1=464 y1=160 x2=48 y2=160>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCalendarOutline(props) {
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