import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M208,368V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></path><path d=M256,368V472a23.73,23.73,0,0,0,24,24h0a23.73,23.73,0,0,0,24-24V368 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></path><path d=M183,274a23.73,23.73,0,0,1-29.84,16.18h0a23.72,23.72,0,0,1-16.17-29.84l25-84.28A44.85,44.85,0,0,1,205,144H307a44.85,44.85,0,0,1,43,32.08l25,84.28a23.72,23.72,0,0,1-16.17,29.84h0A23.73,23.73,0,0,1,329.05,274 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></path><circle cx=256 cy=56 r=40 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></circle><polyline points="208 192 160 352 352 352 304 192"style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonWomanOutline(props) {
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