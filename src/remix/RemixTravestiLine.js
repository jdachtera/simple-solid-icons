import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M8.95126 8.53668C10.2131 7.57265 11.7898 7.00002 13.5004 7.00002C17.6425 7.00002 21.0004 10.3579 21.0004 14.5C21.0004 18.6422 17.6425 22 13.5004 22C9.35825 22 6.00038 18.6422 6.00038 14.5C6.00038 12.7895 6.57302 11.2127 7.53705 9.95089L4.66155 7.0754L2.18667 9.55027L0.772461 8.13606L7.13642 1.77209L8.55064 3.18631L6.07576 5.66118L8.95126 8.53668ZM13.5004 20C16.5379 20 19.0004 17.5376 19.0004 14.5C19.0004 11.4625 16.5379 9.00002 13.5004 9.00002C10.4628 9.00002 8.00038 11.4625 8.00038 14.5C8.00038 17.5376 10.4628 20 13.5004 20Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixTravestiLine(props) {
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