import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M12.001 3V21H7.60098C5.06047 21 3.00098 18.9405 3.00098 16.4V7.6C3.00098 5.05949 5.06047 3 7.60098 3H12.001ZM10.001 5H7.60098C6.16504 5 5.00098 6.16406 5.00098 7.6V16.4C5.00098 17.8359 6.16504 19 7.60098 19H10.001V5ZM7.50098 10C6.67255 10 6.00098 9.32843 6.00098 8.5C6.00098 7.67157 6.67255 7 7.50098 7C8.3294 7 9.00098 7.67157 9.00098 8.5C9.00098 9.32843 8.3294 10 7.50098 10ZM14.001 3H16.401C18.9415 3 21.001 5.05949 21.001 7.6V16.4C21.001 18.9405 18.9415 21 16.401 21H14.001V3ZM17.001 14.7C17.9951 14.7 18.801 13.8941 18.801 12.9C18.801 11.9059 17.9951 11.1 17.001 11.1C16.0069 11.1 15.201 11.9059 15.201 12.9C15.201 13.8941 16.0069 14.7 17.001 14.7Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixSwitchLine(props) {
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