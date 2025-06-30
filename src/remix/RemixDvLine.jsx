import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M11.6076 3H21C21.5523 3 22 3.44772 22 4V16C22 16.5523 21.5523 17 21 17H14V15H20V5H13.7453C14.5362 6.13386 15 7.51276 15 9C15 11.3787 13.8135 13.4804 12 14.7453V21C12 21.5523 11.5523 22 11 22H5C4.44772 22 4 21.5523 4 21V14.7453C2.18652 13.4804 1 11.3787 1 9C1 5.13401 4.13401 2 8 2C9.31966 2 10.554 2.36517 11.6076 2.99999L11.6076 3ZM6 13.584V20H10V13.584C11.7659 12.8124 13 11.0503 13 9C13 6.23858 10.7614 4 8 4C5.23858 4 3 6.23858 3 9C3 11.0503 4.2341 12.8124 6 13.584ZM8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12ZM8 10C8.55228 10 9 9.55228 9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10ZM17 7H19V9H17V7ZM7 17H9V19H7V17Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixDvLine(props) {
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