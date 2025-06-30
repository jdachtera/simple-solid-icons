import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><line x1=432 y1=400 x2=96 y2=64 style=fill:none;stroke:currentColor;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px></line><path d=M368,192v48a111.74,111.74,0,0,1-2.93,25.45L390.65,291A143.07,143.07,0,0,0,400,240V192Z></path><path d=M272,432V383.11a143.11,143.11,0,0,0,56.65-18.83L305,340.65A112.13,112.13,0,0,1,144,240V192H112v48c0,74,56.1,135.12,128,143.11V432H176v32H336V432Z></path><path d=M336,236.37V128c0-44.86-35.14-80-80-80a79.68,79.68,0,0,0-69,39.34></path><path d=M176,211.63V239a80.89,80.89,0,0,0,23.45,56.9,78.55,78.55,0,0,0,81,20.21Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMicOffSharp(props) {
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