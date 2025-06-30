import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M3.00488 4.00293H21.0049C21.5572 4.00293 22.0049 4.45064 22.0049 5.00293V19.0029C22.0049 19.5552 21.5572 20.0029 21.0049 20.0029H3.00488C2.4526 20.0029 2.00488 19.5552 2.00488 19.0029V5.00293C2.00488 4.45064 2.4526 4.00293 3.00488 4.00293ZM6.50037 6H4.00037V8.5C5.38108 8.5 6.50037 7.38071 6.50037 6ZM17.5004 6C17.5004 7.38071 18.6197 8.5 20.0004 8.5V6H17.5004ZM4.00037 15.5V18H6.50037C6.50037 16.6193 5.38108 15.5 4.00037 15.5ZM17.5004 18H20.0004V15.5C18.6197 15.5 17.5004 16.6193 17.5004 18ZM12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12C16.0004 9.79086 14.2095 8 12.0004 8C9.79123 8 8.00037 9.79086 8.00037 12C8.00037 14.2091 9.79123 16 12.0004 16Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCashFill(props) {
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