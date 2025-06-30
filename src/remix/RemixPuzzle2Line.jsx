import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M7 5C7 2.79086 8.79086 1 11 1C13.2091 1 15 2.79086 15 5H20C20.5523 5 21 5.44772 21 6V10.1707C21 10.4953 20.8424 10.7997 20.5774 10.9872C20.3123 11.1746 19.9728 11.2217 19.6668 11.1135C19.4595 11.0403 19.2355 11 19 11C17.8954 11 17 11.8954 17 13C17 14.1046 17.8954 15 19 15C19.2355 15 19.4595 14.9597 19.6668 14.8865C19.9728 14.7783 20.3123 14.8254 20.5774 15.0128C20.8424 15.2003 21 15.5047 21 15.8293V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V6C3 5.44772 3.44772 5 4 5H7ZM11 3C9.89543 3 9 3.89543 9 5C9 5.23554 9.0403 5.45952 9.11355 5.66675C9.22172 5.97282 9.17461 6.31235 8.98718 6.57739C8.79974 6.84243 8.49532 7 8.17071 7H5V19H19V17C16.7909 17 15 15.2091 15 13C15 10.7909 16.7909 9 19 9V7H13.8293C13.5047 7 13.2003 6.84243 13.0128 6.57739C12.8254 6.31235 12.7783 5.97282 12.8865 5.66675C12.9597 5.45952 13 5.23555 13 5C13 3.89543 12.1046 3 11 3Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixPuzzle2Line(props) {
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