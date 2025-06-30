import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><rect x=158.6 y=150.86 width=95.03 height=110.51 transform="translate(-85.38 206.12) rotate(-45)"></rect><polygon points="301.41 234.21 234.22 301.41 412 480 480 412 301.41 234.21"></polygon><rect x=32 y=176 width=80 height=32></rect><rect x=91.22 y=67.22 width=32 height=80 transform="translate(-44.41 107.22) rotate(-45)"></rect><rect x=176 y=32 width=32 height=80></rect><rect x=236.92 y=91.22 width=80 height=32 transform="translate(5.29 227.22) rotate(-45)"></rect><rect x=67.22 y=260.92 width=80 height=32 transform="translate(-164.41 156.92) rotate(-45)">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonColorWandSharp(props) {
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