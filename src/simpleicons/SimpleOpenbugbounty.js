import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Open Bug Bounty</title><path d="M8.092 2.443a1.388 1.388 0 0 0-1.428 1.611c.42 2.567 2.11 4.115 3.58 4.998a14.12 14.12 0 0 0 .4 2.926H6.52a1.388 1.388 0 0 0 0 2.777h5.155c.39.767.85 1.475 1.37 2.108-1.816 1.36-3.516 3.734-4.34 4.983a1.388 1.388 0 1 0 2.316 1.531c1.376-2.08 3.15-4.046 4.09-4.604a8.208 8.208 0 0 0 3.757 1.416V6.492h-7.484c-.867-.588-1.753-1.506-1.979-2.886a1.388 1.388 0 0 0-1.313-1.163zM18.859 0c-2.971 0-5.501 1.967-6.577 4.765h6.577Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleOpenbugbounty(props) {
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