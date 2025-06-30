import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Pingdom</title><path d="M11.96 17.804l7.959-3.396-7.049 7.241c-.124-1.315-.432-2.61-.91-3.844v-.001zM24 11.118c-5.101-.236-10.208.414-15.087 1.92 1.024 1.073 1.881 2.292 2.535 3.621 4.042-2.25 9.646-5.123 12.552-5.531v-.015.005zm-12.574.275l.207-.06c1.538-.459 3.049-1.015 4.523-1.656 1.492-.585 2.896-1.38 4.159-2.367 1.345-1.069 2.355-2.499 2.915-4.122.12-.267.211-.549.267-.837-2.024 2.76-10.041 3.048-10.041 3.048l1.89-1.734C9.84 3.684 4.47 5.424 0 8.645c3.03.322 5.877 1.596 8.139 3.634 1.086-.336 2.196-.576 3.286-.879v-.006l.001-.001z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePingdom(props) {
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