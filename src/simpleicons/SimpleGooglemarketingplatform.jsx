import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Google Marketing Platform</title><path d="M12 0C8.926 0 5.852 1.17 3.511 3.511c-4.37 4.371-4.66 11.299-.869 16.01a3.138 3.138 0 0 1 .719-3.314 3.138 3.138 0 0 1 3.672-.56 6.163 6.163 0 0 1 9.324-8.004 2.921 2.921 0 1 0 4.132-4.132A11.968 11.968 0 0 0 12 0zm9.36 4.481a3.138 3.138 0 0 1-.72 3.313 3.138 3.138 0 0 1-3.672.56 6.165 6.165 0 0 1-.61 8.003 2.921 2.921 0 1 0 4.131 4.132c4.37-4.37 4.66-11.298.87-16.008zM5.576 15.501a2.92 2.92 0 0 0-2.922 2.922 2.92 2.92 0 0 0 2.922 2.922 2.92 2.92 0 0 0 2.922-2.922A2.92 2.92 0 0 0 5.577 15.5zm10.07 1.467a6.168 6.168 0 0 1-7.293 0 3.14 3.14 0 0 1-.56 3.672 3.136 3.136 0 0 1-3.314.718c4.376 3.523 10.665 3.523 15.04 0a3.136 3.136 0 0 1-3.313-.718 3.138 3.138 0 0 1-.56-3.672z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGooglemarketingplatform(props) {
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