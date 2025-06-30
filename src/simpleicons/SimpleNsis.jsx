import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>NSIS</title><path d="M13.736 24H24l-5.132-4.919L13.736 24Zm-6.021-5.064 5.133 4.918 5.132-4.919-10.265.001Zm-6.539-5.272v9.838l5.132-4.919-1.503-1.441-3.629-3.478Zm21.648-1.626-5.132 4.919 5.132 4.919v-9.838Zm-4.844 6.193-5.132-4.92-5.132 4.92H17.98ZM1.696 13.165l5.132 4.92 5.132-4.92H1.696Zm20.608-1.625H12.039l5.133 4.919 5.132-4.919ZM6.828 7.541l-5.132 4.92H11.96l-5.132-4.92Zm-5.652 4.421 5.132-4.919-5.132-4.919v9.838Zm21.128-1.127-5.132-4.92-5.133 4.92h10.265Zm-6.02-5.065H6.02l5.132 4.919 5.132-4.919Zm6.54-5.272-5.132 4.919 5.132 4.92V.498Zm-6.539 4.567L11.152.146 6.02 5.065h10.265ZM10.264 0H0l5.132 4.919L10.264 0Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleNsis(props) {
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