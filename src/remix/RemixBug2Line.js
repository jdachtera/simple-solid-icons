import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M10.5621 4.14785C11.0262 4.05095 11.5071 4.00001 12 4.00001C12.4929 4.00001 12.9738 4.05095 13.4379 4.14785L15.1213 2.46448L16.5355 3.87869L15.4859 4.92834C16.7177 5.6371 17.7135 6.70996 18.3264 8.00001H21V10H18.9291C18.9758 10.3266 19 10.6605 19 11V12H21V14H19V15C19 15.3395 18.9758 15.6734 18.9291 16H21V18H18.3264C17.2029 20.365 14.7924 22 12 22C9.2076 22 6.7971 20.365 5.67363 18H3V16H5.07089C5.02417 15.6734 5 15.3395 5 15V14H3V12H5V11C5 10.6605 5.02417 10.3266 5.07089 10H3V8.00001H5.67363C6.28647 6.70996 7.28227 5.6371 8.51412 4.92834L7.46447 3.87869L8.87868 2.46448L10.5621 4.14785ZM12 6.00001C9.23858 6.00001 7 8.23859 7 11V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V11C17 8.23859 14.7614 6.00001 12 6.00001ZM9 14H15V16H9V14ZM9 10H15V12H9V10Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixBug2Line(props) {
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