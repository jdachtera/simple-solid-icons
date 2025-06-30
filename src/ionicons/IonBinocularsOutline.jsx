import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><circle cx=392 cy=344 r=88 stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></circle><circle cx=120 cy=344 r=88 stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></circle><path d="M208 344V128C208 101.5 192 80 164 80C129 80 117.5 101.5 107 128C107 128 58.5 255.833 36 317.5"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></path><path d="M208 184C208 184 224.5 176 256 176C287.5 176 304 184 304 184"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></path><path d="M208 272C208 272 224.5 264 256 264C287.5 264 304 272 304 272"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round></path><path d="M304 344V128C304 101.5 320 80 348 80C383 80 394.5 101.5 405 128C405 128 453.5 255.833 476 317.5"stroke=currentColor stroke-width=32 stroke-linecap=round stroke-linejoin=round>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonBinocularsOutline(props) {
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