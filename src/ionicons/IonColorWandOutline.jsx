import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><rect fill=none stroke=currentColor stroke-miterlimit=10 stroke-width=32 x=280.48 y=122.9 width=63.03 height=378.2 rx=31.52 transform="translate(-129.23 312) rotate(-45)"></rect><path d=M178.38,178.38h0a31.64,31.64,0,0,0,0,44.75L223.25,268,268,223.25l-44.87-44.87A31.64,31.64,0,0,0,178.38,178.38Z></path><line stroke=currentColor stroke-miterlimit=10 stroke-width=32 stroke-linecap=round x1=48 y1=192 x2=96 y2=192></line><line stroke=currentColor stroke-miterlimit=10 stroke-width=32 stroke-linecap=round x1=90.18 y1=90.18 x2=124.12 y2=124.12></line><line stroke=currentColor stroke-miterlimit=10 stroke-width=32 stroke-linecap=round x1=192 y1=48 x2=192 y2=96></line><line stroke=currentColor stroke-miterlimit=10 stroke-width=32 stroke-linecap=round x1=293.82 y1=90.18 x2=259.88 y2=124.12></line><line stroke=currentColor stroke-miterlimit=10 stroke-width=32 stroke-linecap=round x1=124.12 y1=259.88 x2=90.18 y2=293.82>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonColorWandOutline(props) {
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