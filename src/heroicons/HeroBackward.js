import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M21 16.8115C21 17.6753 20.0668 18.2169 19.3169 17.7883L12.2094 13.7269C11.4536 13.295 11.4536 12.2052 12.2094 11.7733L19.3169 7.7119C20.0668 7.28334 21 7.82487 21 8.68867V16.8115Z"stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round></path><path d="M11.25 16.8115C11.25 17.6753 10.3168 18.2169 9.56685 17.7883L2.45936 13.7269C1.70357 13.295 1.70357 12.2052 2.45936 11.7733L9.56685 7.7119C10.3168 7.28334 11.25 7.82487 11.25 8.68867L11.25 16.8115Z"stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: heroicons | License: MIT (<https://github.com/tailwindlabs/heroicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function HeroBackward(props) {
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