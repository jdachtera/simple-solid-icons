import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M114.57,76.07a45.71,45.71,0,0,0-67.51-6.41c-17.58,16.18-19,43.52-4.75,62.77l91.78,123L41.76,379.58c-14.23,19.25-13.11,46.59,4.74,62.77A45.71,45.71,0,0,0,114,435.94L242.89,262.7a12.14,12.14,0,0,0,0-14.23ZM470.24,379.58,377.91,255.45l91.78-123c14.22-19.25,12.83-46.59-4.75-62.77a45.71,45.71,0,0,0-67.51,6.41l-128,172.12a12.14,12.14,0,0,0,0,14.23L398,435.94a45.71,45.71,0,0,0,67.51,6.41C483.35,426.17,484.47,398.83,470.24,379.58Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsMixer(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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