import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><polyline points="400 400.33 448 400 448 112 400 112.33"style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px></polyline><polyline points="112 112 64 112.33 64 400.33 112 400"style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px></polyline><line x1=384 y1=192 x2=384 y2=320 style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px></line><line x1=320 y1=160 x2=320 y2=352 style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px></line><line x1=256 y1=176 x2=256 y2=336 style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px></line><line x1=192 y1=160 x2=192 y2=352 style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px></line><line x1=128 y1=192 x2=128 y2=320 style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBarcodeSharp(props) {
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