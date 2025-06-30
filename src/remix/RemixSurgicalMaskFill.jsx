import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M12.4851 3.12124L20.2425 5.0606C20.6877 5.1719 21 5.57188 21 6.03075V6.99952L22 6.99997C23.1 6.99997 24 7.89997 24 8.99997V12C24 13.6568 22.6569 15 21 15L20.5789 15.0003C20.0443 16.3501 19.0275 17.4862 17.6833 18.1583L12.8944 20.5528C12.3314 20.8343 11.6686 20.8343 11.1056 20.5528L6.31672 18.1583C4.97252 17.4862 3.95573 16.3501 3.42113 15.0003L3 15C1.34315 15 0 13.6568 0 12V8.99997C0 7.8954 0.89543 6.99997 2 6.99997L3 6.99952V6.03075C3 5.57188 3.3123 5.1719 3.75746 5.0606L11.5149 3.12124C11.8334 3.04162 12.1666 3.04162 12.4851 3.12124ZM3 8.99997H2V12C2 12.5523 2.44772 13 3 13V8.99997ZM22 8.99997H21V13C21.5523 13 22 12.5523 22 12V8.99997Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixSurgicalMaskFill(props) {
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