import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>YouTube Studio</title><path d="M20.919 13.176c.048-.384.084-.768.084-1.176s-.036-.792-.084-1.176l2.532-1.98a.605.605 0 0 0 .144-.768l-2.4-4.152a.603.603 0 0 0-.732-.264l-2.988 1.2a8.767 8.767 0 0 0-2.028-1.176l-.456-3.18A.585.585 0 0 0 14.403 0h-4.8c-.3 0-.552.216-.588.504l-.456 3.18A9.22 9.22 0 0 0 6.531 4.86l-2.988-1.2a.585.585 0 0 0-.732.264l-2.4 4.152a.592.592 0 0 0 .144.768l2.532 1.98c-.048.384-.084.78-.084 1.176s.036.792.084 1.176l-2.532 1.98a.605.605 0 0 0-.144.768l2.4 4.152c.144.264.468.36.732.264l2.988-1.2c.624.48 1.296.876 2.028 1.176l.456 3.18a.585.585 0 0 0 .588.504h4.8c.3 0 .552-.216.588-.504l.456-3.18a9.22 9.22 0 0 0 2.028-1.176l2.988 1.2c.276.108.588 0 .732-.264l2.4-4.152a.605.605 0 0 0-.144-.768l-2.532-1.98zM9.603 15.6V8.4l6 3.6-6 3.6z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleYoutubestudio(props) {
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