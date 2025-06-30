import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Nextra</title><path d="M22.68 21.031c-4.98-4.98-4.98-13.083 0-18.063l.978-.978c.22-.22.342-.513.342-.825 0-.311-.122-.604-.342-.824-.44-.441-1.207-.44-1.648 0l-.979.978c-4.98 4.98-13.084 4.98-18.063 0L1.99.34a1.17 1.17 0 0 0-1.649 0 1.168 1.168 0 0 0 0 1.649l.978.978c4.98 4.98 4.98 13.083 0 18.063l-.977.978c-.221.22-.342.513-.342.825 0 .31.121.604.341.824.442.443 1.21.441 1.65 0l.977-.977c4.98-4.983 13.083-4.98 18.064 0l.978.977c.22.22.513.342.824.342.312 0 .605-.122.824-.342.22-.22.342-.512.342-.824 0-.313-.122-.605-.342-.825l-.977-.978z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleNextra(props) {
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