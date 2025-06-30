import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Google Assistant</title><path d="M22.365 8.729c.9 0 1.635-.735 1.635-1.635s-.735-1.636-1.635-1.636-1.636.735-1.636 1.636.723 1.635 1.636 1.635m-4.907 5.452a3.27 3.27 0 1 0 0-6.542 3.27 3.27 0 0 0 0 6.542m0 8.722c2.105 0 3.816-1.711 3.816-3.829s-1.711-3.816-3.829-3.816a3.82 3.82 0 0 0-3.816 3.816 3.825 3.825 0 0 0 3.829 3.83M6.542 14.18a6.542 6.542 0 1 0 0-13.084 6.542 6.542 0 1 0 0 13.084">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGoogleassistant(props) {
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