import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M17 18a5 5 0 0 0-10 0"></path><line x1=12 y1=2 x2=12 y2=9></line><line x1=4.22 y1=10.22 x2=5.64 y2=11.64></line><line x1=1 y1=18 x2=3 y2=18></line><line x1=21 y1=18 x2=23 y2=18></line><line x1=18.36 y1=11.64 x2=19.78 y2=10.22></line><line x1=23 y1=22 x2=1 y2=22></line><polyline points="8 6 12 2 16 6">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: feather | License: MIT (<https://github.com/feathericons/feather/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function FeatherSunrise(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
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