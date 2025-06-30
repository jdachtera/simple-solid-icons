import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><polyline points="160 368 32 256 160 144"style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px></polyline><polyline points="352 368 480 256 352 144"style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px></polyline><polyline points="192 288.1 256 352 320 288.1"style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px></polyline><line x1=256 y1=160 x2=256 y2=336.03 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonCodeDownload(props) {
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