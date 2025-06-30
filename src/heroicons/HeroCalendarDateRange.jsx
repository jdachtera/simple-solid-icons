import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M6.7491 2.9945V5.24472M17.2494 2.99316V5.24338M2.99756 18.7434V7.49209C2.99756 6.24938 4.00496 5.24197 5.24766 5.24197H18.7475C19.9902 5.24197 20.9976 6.24938 20.9976 7.49209V18.7434M2.99756 18.7434C2.99756 19.9861 4.00496 20.9935 5.24766 20.9935H18.7475C19.9902 20.9935 20.9976 19.9861 20.9976 18.7434M2.99756 18.7434V11.2429C2.99756 10.0002 4.00496 8.99282 5.24766 8.99282H18.7475C19.9902 8.99282 20.9976 10.0002 20.9976 11.2429V18.7434M14.2475 12.7429H16.4975M7.49752 14.9932H11.9975M11.9997 12.7429H12.0053V12.7486H11.9997V12.7429ZM11.9989 17.2437H12.0046V17.2493H11.9989V17.2437ZM9.74858 17.2444H9.75421V17.25H9.74858V17.2444ZM7.49824 17.2437H7.50387V17.2493H7.49824V17.2437ZM14.2485 14.9969H14.2542V15.0025H14.2485V14.9969ZM14.2493 17.2444H14.255V17.25H14.2493V17.2444ZM16.4996 14.9955H16.5052V15.0011H16.4996V14.9955Z"stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: heroicons | License: MIT (<https://github.com/tailwindlabs/heroicons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function HeroCalendarDateRange(props) {
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