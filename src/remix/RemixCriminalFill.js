import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M12 2C16.9706 2 21 6.02944 21 11C21 13.2031 20.2084 15.2213 18.8941 16.7858C20.1491 17.6156 20.9275 18.6754 20.9952 19.835L21 20L12 22L3 20L3.00481 19.835C3.0725 18.6755 3.85076 17.6158 5.10554 16.7859C3.79194 15.2222 3 13.2036 3 11C3 6.02944 7.02944 2 12 2ZM12 13C10.6193 13 9.5 13.6716 9.5 14.5C9.5 15.3284 10.6193 16 12 16C13.3807 16 14.5 15.3284 14.5 14.5C14.5 13.6716 13.3807 13 12 13ZM9 8C7.89543 8 7 8.67157 7 9.5C7 10.3284 7.89543 11 9 11C10.1046 11 11 10.3284 11 9.5C11 8.67157 10.1046 8 9 8ZM15 8C13.8954 8 13 8.67157 13 9.5C13 10.3284 13.8954 11 15 11C16.1046 11 17 10.3284 17 9.5C17 8.67157 16.1046 8 15 8Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixCriminalFill(props) {
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