import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M12.0049 3.10321L7.05514 8.05295C4.32147 10.7866 4.32147 15.2188 7.05514 17.9524C9.78881 20.6861 14.221 20.6861 16.9546 17.9524C19.6883 15.2188 19.6883 10.7866 16.9546 8.05296L12.0049 3.10321ZM12.0049 0.27478L18.3688 6.63874C21.8836 10.1535 21.8836 15.8519 18.3688 19.3667C14.8541 22.8814 9.15564 22.8814 5.64092 19.3667C2.1262 15.8519 2.1262 10.1535 5.64092 6.63874L12.0049 0.27478ZM13.0049 11.0027H15.5049L11.0049 17.5027V13.0027H8.50488L13.0049 6.5027V11.0027Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixWaterFlashLine(props) {
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