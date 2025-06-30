import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M16.3143 19.1379H20.3793C20.7221 19.1379 21 19.4158 21 19.7586V20.3793C21 20.7221 20.7221 21 20.3793 21H3.62069C3.27789 21 3 20.7221 3 20.3793V19.7586C3 19.4158 3.27789 19.1379 3.62069 19.1379H7.37438L6.41379 16.0345H8.60436C8.87152 16.0345 9.10871 16.2054 9.19319 16.4589L10.0862 19.1379H13.5988L14.8236 15.1034H5.17241C4.82962 15.1034 4.55172 14.8256 4.55172 14.4828V7.34483C4.55172 7.00203 4.82962 6.72414 5.17241 6.72414H18.8276C19.1704 6.72414 19.4483 7.00203 19.4483 7.34483V14.4828C19.4483 14.8256 19.1704 15.1034 18.8276 15.1034H17.5391L16.3143 19.1379ZM3.93103 3H20.069C20.4118 3 20.6897 3.27789 20.6897 3.62069V4.24138C20.6897 4.58418 20.4118 4.86207 20.069 4.86207H3.93103C3.58824 4.86207 3.31034 4.58418 3.31034 4.24138V3.62069C3.31034 3.27789 3.58824 3 3.93103 3ZM7.18966 8.58621C7.10396 8.58621 7.03448 8.65568 7.03448 8.74138V12.7759C7.03448 12.8616 7.10396 12.931 7.18966 12.931H16.8103C16.896 12.931 16.9655 12.8616 16.9655 12.7759V8.74138C16.9655 8.65568 16.896 8.58621 16.8103 8.58621H7.18966Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixDoubanFill(props) {
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