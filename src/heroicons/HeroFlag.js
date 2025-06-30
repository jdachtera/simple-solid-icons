import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M3 3V4.5M3 21V15M3 15L5.77009 14.3075C7.85435 13.7864 10.0562 14.0281 11.9778 14.9889L12.0856 15.0428C13.9687 15.9844 16.1224 16.2359 18.1718 15.7537L21.2861 15.0209C21.097 13.2899 21 11.5313 21 9.75C21 7.98343 21.0954 6.23914 21.2814 4.52202L18.1718 5.25369C16.1224 5.73591 13.9687 5.48435 12.0856 4.54278L11.9778 4.48892C10.0562 3.52812 7.85435 3.28641 5.77009 3.80748L3 4.5M3 15V4.5"stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: heroicons | License: MIT (<https://github.com/tailwindlabs/heroicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function HeroFlag(props) {
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