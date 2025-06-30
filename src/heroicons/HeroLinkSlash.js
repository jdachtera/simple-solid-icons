import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M13.1813 8.68025C13.6303 8.89477 14.0511 9.188 14.423 9.55994C15.9219 11.0591 16.1423 13.3528 15.084 15.0855M5.31614 12.3032L3.5592 14.0604C1.80188 15.8179 1.80188 18.6674 3.5592 20.4249C5.31653 22.1825 8.16572 22.1825 9.92304 20.4249L13.0517 17.296M18.6659 11.6811L20.4228 9.92393C22.1802 8.1664 22.1802 5.31689 20.4228 3.55936C18.6655 1.80183 15.8163 1.80183 14.059 3.55936L9.55909 8.05979C9.30075 8.31816 9.08038 8.60014 8.898 8.89877M10.8008 15.3041C10.3518 15.0895 9.93099 14.7963 9.55909 14.4244C9.0674 13.9326 8.71328 13.3554 8.49674 12.7405M15.084 15.0855L20.9908 20.993M15.084 15.0855L8.898 8.89877M2.9912 2.99128L8.898 8.89877"stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: heroicons | License: MIT (<https://github.com/tailwindlabs/heroicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function HeroLinkSlash(props) {
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