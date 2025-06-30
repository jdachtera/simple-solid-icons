import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M11.1411 2H12.8589C14.8728 2 15.9528 2.27848 16.9305 2.8014C17.9083 3.32432 18.6757 4.09169 19.1986 5.06946C19.7215 6.04724 20 7.12721 20 9.14111V14.8589C20 16.8728 19.7215 17.9528 19.1986 18.9305C18.6757 19.9083 17.9083 20.6757 16.9305 21.1986C15.9528 21.7215 14.8728 22 12.8589 22H11.1411C9.12721 22 8.04724 21.7215 7.06946 21.1986C6.09169 20.6757 5.32432 19.9083 4.8014 18.9305C4.27848 17.9528 4 16.8728 4 14.8589V9.14111C4 7.12721 4.27848 6.04724 4.8014 5.06946C5.32432 4.09169 6.09169 3.32432 7.06946 2.8014C8.04724 2.27848 9.12721 2 11.1411 2ZM11 6V11H13V6H11Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixMouseFill(props) {
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