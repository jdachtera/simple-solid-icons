import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><line x1=144 y1=144 x2=464 y2=144 style=fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:48px></line><line x1=144 y1=256 x2=464 y2=256 style=fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:48px></line><line x1=144 y1=368 x2=464 y2=368 style=fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:48px></line><rect x=64 y=128 width=32 height=32 style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px></rect><rect x=64 y=240 width=32 height=32 style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px></rect><rect x=64 y=352 width=32 height=32 style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonListSharp(props) {
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