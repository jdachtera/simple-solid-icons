import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M429.58,209.08h0c-15.06-6.62-32.38,1.31-38.5,17.62L356,312H344.73V80c0-17.6-13.3-32-29.55-32h0c-16.26,0-29.55,14.4-29.55,32V231.75l-14.78.25V32c0-17.6-13.3-32-29.55-32h0c-16.25,0-29.55,14.4-29.55,32V231.75L197,232V64c0-17.6-13.3-32-29.55-32h0c-16.26,0-29.55,14.4-29.55,32V247.75L123.1,248V128c0-17.6-13.3-32-29.55-32h0C77.3,96,64,110.4,64,128V344c0,75.8,37.13,168,169,168,40.8,0,79.42-7,100.66-21a121.41,121.41,0,0,0,33.72-33.31,138,138,0,0,0,16-31.78l62.45-175.14C452,234.46,444.64,215.71,429.58,209.08Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonHandLeftSharp(props) {
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