import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><rect x=112 y=48 width=288 height=416 rx=32 ry=32 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></rect><rect x=160.01 y=112 width=191.99 height=64 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></rect><circle cx=168 cy=248 r=24></circle><circle cx=256 cy=248 r=24></circle><circle cx=344 cy=248 r=24></circle><circle cx=168 cy=328 r=24></circle><circle cx=256 cy=328 r=24></circle><circle cx=168 cy=408 r=24></circle><circle cx=256 cy=408 r=24></circle><rect x=320 y=304 width=48 height=128 rx=24 ry=24>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCalculatorOutline(props) {
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