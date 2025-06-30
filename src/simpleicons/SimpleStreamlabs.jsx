import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Streamlabs</title><path d="M8.6878 1.3459a1.365 1.365 0 0 0-.2734.0058c-.528.066-1.0133.1616-1.4843.3086A10.0568 10.0568 0 0 0 .3208 8.2697c-.147.471-.2445.9583-.3105 1.4863-.091.734.431 1.4041 1.166 1.4961.734.091 1.404-.43 1.496-1.164.05-.406.119-.7316.209-1.0196A7.3736 7.3736 0 0 1 7.727 4.221c.288-.09.6145-.157 1.0195-.207.735-.092 1.255-.7631 1.164-1.4981a1.3394 1.3394 0 0 0-1.2226-1.17Zm4.0488 5.2226c-2.629 0-3.9432.0007-4.9472.5117A4.684 4.684 0 0 0 5.7406 9.131c-.512 1.004-.5117 2.3183-.5117 4.9473v4.289c0 1.502-.001 2.2542.291 2.8282.257.505.6679.9149 1.1719 1.1719.574.292 1.326.291 2.828.291h6.9706c2.628 0 3.9442.0012 4.9472-.5098a4.6883 4.6883 0 0 0 2.0507-2.0508c.512-1.004.5117-2.3182.5117-4.9472v-1.0723c0-2.629.0003-3.9433-.5117-4.9473a4.6883 4.6883 0 0 0-2.0507-2.0508c-1.003-.511-2.3193-.5117-4.9472-.5117zm.537 6.7051c.741 0 1.3399.5998 1.3399 1.3398v2.6836c0 .74-.5988 1.3399-1.3398 1.3399-.74 0-1.3418-.5999-1.3418-1.3399v-2.6836c0-.74.6018-1.3398 1.3418-1.3398zm5.3632 0c.74 0 1.3399.5998 1.3399 1.3398v2.6836c0 .74-.5999 1.3399-1.3399 1.3399-.741 0-1.3398-.5999-1.3398-1.3399v-2.6836c0-.74.5989-1.3398 1.3398-1.3398z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleStreamlabs(props) {
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