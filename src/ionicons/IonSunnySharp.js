import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><rect x=234 y=26 width=44 height=92></rect><rect x=234 y=394 width=44 height=92></rect><rect x=340.11 y=103.89 width=92 height=44 transform="translate(24.07 309.89) rotate(-45)"></rect><rect x=79.89 y=364.11 width=92 height=44 transform="translate(-236.14 202.1) rotate(-45)"></rect><rect x=394 y=234 width=92 height=44></rect><rect x=26 y=234 width=92 height=44></rect><rect x=364.11 y=340.11 width=44 height=92 transform="translate(-159.93 386.11) rotate(-45)"></rect><rect x=103.89 y=79.89 width=44 height=92 transform="translate(-52.15 125.89) rotate(-45)"></rect><path d=M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonSunnySharp(props) {
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