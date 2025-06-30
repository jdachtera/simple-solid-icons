import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Eight Sleep</title><path d="M19.847 7.28V4.105A4.104 4.104 0 0 0 15.745 0H8.258a4.104 4.104 0 0 0-4.105 4.102v3.183a4.092 4.092 0 0 0 2.415 3.738v.588a4.102 4.102 0 0 0-2.415 3.738v4.546A4.104 4.104 0 0 0 8.255 24h7.488a4.104 4.104 0 0 0 4.104-4.104v-4.553a4.102 4.102 0 0 0-2.415-3.738v-.587a4.102 4.102 0 0 0 2.415-3.738zM8.451 5.126c0-.818.662-1.482 1.48-1.483h4.133c.819 0 1.483.663 1.483 1.482v1.991c0 .819-.664 1.482-1.483 1.482H9.93a1.482 1.482 0 0 1-1.482-1.482l.003-1.99zm7.1 13.732c0 .818-.664 1.482-1.483 1.482H9.93a1.482 1.482 0 0 1-1.482-1.482v-2.752c0-.819.664-1.483 1.482-1.483h4.134c.819 0 1.483.664 1.483 1.483l.003 2.752z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleEightsleep(props) {
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