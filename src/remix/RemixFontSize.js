import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M11.246 15H4.75416L2.75416 20H0.600098L7.0001 4H9.0001L15.4001 20H13.246L11.246 15ZM10.446 13L8.0001 6.88516L5.55416 13H10.446ZM21.0001 12.5351V12H23.0001V20H21.0001V19.4649C20.4118 19.8052 19.7287 20 19.0001 20C16.791 20 15.0001 18.2091 15.0001 16C15.0001 13.7909 16.791 12 19.0001 12C19.7287 12 20.4118 12.1948 21.0001 12.5351ZM19.0001 18C20.1047 18 21.0001 17.1046 21.0001 16C21.0001 14.8954 20.1047 14 19.0001 14C17.8955 14 17.0001 14.8954 17.0001 16C17.0001 17.1046 17.8955 18 19.0001 18Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixFontSize(props) {
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