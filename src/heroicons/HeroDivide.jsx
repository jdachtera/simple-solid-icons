import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M4.49902 11.9983H19.4987M11.9992 5.24808H12.0067V5.25558H11.9992V5.24808ZM12.3742 5.24808C12.3742 5.45521 12.2063 5.62312 11.9992 5.62312C11.7921 5.62312 11.6242 5.45521 11.6242 5.24808C11.6242 5.04096 11.7921 4.87305 11.9992 4.87305C12.2063 4.87305 12.3742 5.04096 12.3742 5.24808ZM11.9998 18.7509H12.0073V18.7584H11.9998V18.7509ZM12.3748 18.7509C12.3748 18.9581 12.2069 19.126 11.9998 19.126C11.7927 19.126 11.6248 18.9581 11.6248 18.7509C11.6248 18.5438 11.7927 18.3759 11.9998 18.3759C12.2069 18.3759 12.3748 18.5438 12.3748 18.7509Z"stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: heroicons | License: MIT (<https://github.com/tailwindlabs/heroicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function HeroDivide(props) {
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