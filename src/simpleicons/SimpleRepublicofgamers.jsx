import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Republic of Gamers</title><path d="M21.3906 5.5833c-1.3467.0115-3.4338.19541-5.9375.97657-1.6024.49851-3.916 2.74203-8.22459 6.90823-.56973.3204-2.67017-.8912-3.88085-1.461 0 0 1.9929 3.1699 2.70507 4.0957 1.06825 1.46 3.02735 2.3145 3.02735 2.3145-.17804-.1781-1.53019-1.6029-1.92188-2.4219-.24926-.3917.03418-.9624 1.95703-2.3867C10.86 12.3268 17.0569 7.09358 23.0391 5.66924c0 0-.601-.09488-1.6485-.08593V5.5833ZM24 7.7708c-2.0653.21366-4.06.81878-5.9473 1.70899C14.2783 11.2602 7.9043 15.8177 7.9043 15.8177c.28486.178.5706.3556.85546.498 3.06234 1.3531 7.58484 2.1716 8.43944 1.8867 2.3858-.7833 5.056-5.8026 5.875-8.1172 0 0-2.4933.9968-5.0215 2.1719-2.1009.9971-4.414 2.1368-4.414 2.1368l5.875-1.7813s-1.5676 3.7036-3.6328 4.1309c-2.0653.4273-5.6973-1.0332-5.6973-1.0332.2849-.2493 4.1302-3.0629 13.1035-6.73051.3917-.28487.6417-.74608.7129-1.20898V7.7708ZM0 11.2942c.35608.9615.8194 1.8525 1.35352 2.7071.64094.819 3.27477 1.4952 3.63086 1.5664C3.34638 14.4282 0 11.2942 0 11.2942Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRepublicofgamers(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
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