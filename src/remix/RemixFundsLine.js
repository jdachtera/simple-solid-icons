import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M4.41085 14.5258L7.81249 11.1241L10.6409 13.9526L13.7978 10.7957L12.0049 9.00281H17.0049V14.0028L15.212 12.2099L10.6409 16.781L7.81249 13.9526L5.33834 16.4267C6.77158 18.5822 9.22233 20.0028 12.0049 20.0028C16.4232 20.0028 20.0049 16.4211 20.0049 12.0028C20.0049 7.58453 16.4232 4.00281 12.0049 4.00281C7.5866 4.00281 4.00488 7.58453 4.00488 12.0028C4.00488 12.8844 4.14747 13.7326 4.41085 14.5258ZM2.87288 16.084L2.86275 16.0739L2.86662 16.07C2.31276 14.8274 2.00488 13.4511 2.00488 12.0028C2.00488 6.47996 6.48204 2.00281 12.0049 2.00281C17.5277 2.00281 22.0049 6.47996 22.0049 12.0028C22.0049 17.5257 17.5277 22.0028 12.0049 22.0028C7.93574 22.0028 4.43426 19.5724 2.87288 16.084Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixFundsLine(props) {
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