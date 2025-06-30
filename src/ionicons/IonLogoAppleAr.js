import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><polyline points="201.14 64 256 32 310.86 64"fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=32></polyline><line x1=256 y1=32 x2=256 y2=112 fill=none stroke=currentColor stroke-linecap=round stroke-miterlimit=10 stroke-width=32></line><polyline points="310.86 448 256 480 201.14 448"fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=32></polyline><line x1=256 y1=480 x2=256 y2=400 fill=none stroke=currentColor stroke-linecap=round stroke-miterlimit=10 stroke-width=32></line><polyline points="64 207.51 64 144 117.15 112.49"fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=32></polyline><line x1=64 y1=144 x2=131.29 y2=184 fill=none stroke=currentColor stroke-linecap=round stroke-miterlimit=10 stroke-width=32></line><polyline points="448 304.49 448 368 394.85 399.51"fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=32></polyline><line x1=448 y1=368 x2=380.71 y2=328 fill=none stroke=currentColor stroke-linecap=round stroke-miterlimit=10 stroke-width=32></line><polyline points="117.15 400 64 368 64 304.49"fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=32></polyline><line x1=64 y1=368 x2=130.64 y2=328 fill=none stroke=currentColor stroke-linecap=round stroke-miterlimit=10 stroke-width=32></line><polyline points="394.85 112.49 448 144 448 207.51"fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=32></polyline><line x1=448 y1=144 x2=380.71 y2=184 fill=none stroke=currentColor stroke-linecap=round stroke-miterlimit=10 stroke-width=32></line><polyline points="256 320 256 256 310.86 224"fill=none stroke=currentColor stroke-linecap=round stroke-miterlimit=10 stroke-width=32></polyline><line x1=256 y1=256 x2=201.14 y2=224 fill=none stroke=currentColor stroke-linecap=round stroke-miterlimit=10 stroke-width=32>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonLogoAppleAr(props) {
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