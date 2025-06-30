import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM9.00008 10C9.00008 9.44772 8.55236 9 8.00008 9C7.44779 9 7.00008 9.44772 7.00008 10C7.00008 10.5523 7.44779 11 8.00008 11C8.55236 11 9.00008 10.5523 9.00008 10ZM11.0001 10C11.0001 11.6569 9.65693 13 8.00008 13C6.34322 13 5.00008 11.6569 5.00008 10C5.00008 8.34315 6.34322 7 8.00008 7C9.65693 7 11.0001 8.34315 11.0001 10ZM5.52725 17.0251L4.11304 15.6109C5.10725 14.6167 6.48362 14 8.00212 14C9.52063 14 10.897 14.6167 11.8912 15.6109L10.477 17.0251C9.84253 16.3907 8.9689 16 8.00212 16C7.03535 16 6.16172 16.3907 5.52725 17.0251ZM13 15V9H15V15H13ZM17 15V9H19V15H17Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixPassPendingFill(props) {
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