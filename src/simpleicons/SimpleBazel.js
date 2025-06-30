import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Bazel</title><path d="m11.7473 23.8198-5.4987-5.4987v-5.5349l5.4987 5.4986v5.535zm-.1036-17.6412-.0001-.0001.1768-.1768L5.9986.1799.1768 6.0018l.0001.0001 5.8217 5.8271 5.6451-5.6504zM0 6.5323v5.5347l5.7486 5.7539v-5.5347l-.1035-.1035.0001-.0001L0 6.5323zm17.6478 5.6504-5.6505-5.6505-5.6452 5.6504 5.6452 5.6453 5.6505-5.6452zm.1036 5.8885v-5.2853l-5.5042 5.4991v5.5351l5.5042-5.4991v-.2498zM24 6.5323l-5.6451 5.6503.0001.0001-.1036.1035v5.5346L24 12.067V6.5323zm-.1769-.5304.0001-.0001L18.0014.18l-5.8273 5.822 5.8273 5.8272 5.8217-5.8273z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBazel(props) {
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