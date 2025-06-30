import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>WWE</title><path d="M24 1.047L15.67 18.08l-3.474-8.53-3.474 8.53L.393 1.048l3.228 8.977 3.286 8.5C3.874 19.334 1.332 20.46 0 21.75c.443-.168 3.47-1.24 7.409-1.927l1.21 3.129 1.552-3.518a36.769 36.769 0 0 1 3.96-.204l1.644 3.722 1.4-3.62c2.132.145 3.861.426 4.675.692 0 0 .92-1.962 1.338-2.866a54.838 54.838 0 0 0-5.138-.092l2.722-7.042zm-21.84.026L8.64 13.86l3.568-9.155 3.567 9.155 6.481-12.788-6.433 8.452-3.615-8.22-3.615 8.22zm10.036 13.776l1.115 2.523a42.482 42.482 0 0 0-2.363.306Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWwe(props) {
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