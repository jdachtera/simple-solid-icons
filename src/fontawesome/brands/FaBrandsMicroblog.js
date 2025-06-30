import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M399.36,362.23c29.49-34.69,47.1-78.34,47.1-125.79C446.46,123.49,346.86,32,224,32S1.54,123.49,1.54,236.44,101.14,440.87,224,440.87a239.28,239.28,0,0,0,79.44-13.44,7.18,7.18,0,0,1,8.12,2.56c18.58,25.09,47.61,42.74,79.89,49.92a4.42,4.42,0,0,0,5.22-3.43,4.37,4.37,0,0,0-.85-3.62,87,87,0,0,1,3.69-110.69ZM329.52,212.4l-57.3,43.49L293,324.75a6.5,6.5,0,0,1-9.94,7.22L224,290.92,164.94,332a6.51,6.51,0,0,1-9.95-7.22l20.79-68.86-57.3-43.49a6.5,6.5,0,0,1,3.8-11.68l71.88-1.51,23.66-67.92a6.5,6.5,0,0,1,12.28,0l23.66,67.92,71.88,1.51a6.5,6.5,0,0,1,3.88,11.68Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsMicroblog(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 448 512',
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