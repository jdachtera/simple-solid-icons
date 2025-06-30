import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>MUO</title><path d="M4.887 6.016 0 10.903v7.048h19.108l4.873-4.874v-7.06Zm5.46 3.57a.295.295 0 0 1 .314.314v3.652h3V9.9a.303.303 0 0 1 .331-.314.295.295 0 0 1 .315.314v3.72a.506.506 0 0 1-.56.552h-3.18a.502.502 0 0 1-.551-.552V9.9a.303.303 0 0 1 .33-.314zm-5.113.041a.597.597 0 0 1 .465.22l1.638 1.99L8.96 9.81a.47.47 0 0 1 .378-.183h.164a.18.18 0 0 1 .183.183.193.193 0 0 1-.046.128L7.668 12.4a.433.433 0 0 1-.33.19.443.443 0 0 1-.323-.185l-1.45-1.753v3.246a.303.303 0 0 1-.331.315.295.295 0 0 1-.315-.315V9.942a.295.295 0 0 1 .315-.315zm9.942 0h3.334a.502.502 0 0 1 .552.552v3.44a.502.502 0 0 1-.552.553h-3.334a.502.502 0 0 1-.552-.552v-3.44a.502.502 0 0 1 .552-.553zm.093.62v3.304h3.148v-3.303zm-5.775.584c.032 0 .191.012.191.25v2.817a.303.303 0 0 1-.33.315.295.295 0 0 1-.315-.315V11.49a.591.591 0 0 1 .133-.378l.131-.164.012-.013c.058-.058.104-.104.178-.104zM24 14.498l-3.486 3.486H24Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMuo(props) {
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