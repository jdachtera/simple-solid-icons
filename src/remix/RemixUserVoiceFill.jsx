import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M1 22C1 17.5817 4.58172 14 9 14C13.4183 14 17 17.5817 17 22H1ZM9 13C5.685 13 3 10.315 3 7.00002C3 3.68502 5.685 1.00002 9 1.00002C12.315 1.00002 15 3.68502 15 7.00002C15 10.315 12.315 13 9 13ZM18.2463 3.18451C18.732 4.36026 19 5.64884 19 7.00002C19 8.35119 18.732 9.63977 18.2463 10.8155L16.5694 9.59595C16.8485 8.78194 17 7.90867 17 7.00002C17 6.09136 16.8485 5.21809 16.5694 4.40408L18.2463 3.18451ZM21.5476 0.783569C22.4773 2.65651 23 4.76723 23 7.00002C23 9.23281 22.4773 11.3435 21.5476 13.2165L19.9027 12.0201C20.6071 10.4928 21 8.79231 21 7.00002C21 5.20772 20.6071 3.5072 19.9027 1.9799L21.5476 0.783569Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixUserVoiceFill(props) {
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