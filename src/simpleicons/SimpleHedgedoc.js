import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>HedgeDoc</title><path d="m12.097.227-1.913 1.341L7.93.914 6.6 2.816l-2.346.142-.586 2.234-2.157.92.23 2.295L.032 9.995l1.015 2.083L0 14.14l1.679 1.616-.267 2.291 2.141.955.549 2.243 2.344.178 1.3 1.925 2.965-.836-6.421-6.298a4.548 4.548 0 0 1-1.491-3.364c0-2.542 2.1-4.601 4.692-4.601 1.406 0 2.668.607 3.527 1.57l.978.959 1.195-1.173a4.725 4.725 0 0 1 3.3-1.332c2.591 0 4.692 2.061 4.692 4.603 0 1.4-.702 2.628-1.644 3.497l-6.291 6.178a1.78 1.78 0 0 0-1.25-.509c-.489 0-.933.195-1.252.51.006.675.563 1.22 1.252 1.22.66 0 1.2-.502 1.248-1.139l2.822.78 1.33-1.901 2.348-.142.585-2.234 2.156-.921-.227-2.297 1.705-1.587-1.015-2.081L24 10.186l-1.68-1.614.266-2.293-2.14-.955-.55-2.243-2.344-.18L16.253.98l-2.265.619ZM9.292 13.58c-.614 0-1.111.489-1.111 1.091a1.1 1.1 0 0 0 1.111 1.09 1.1 1.1 0 0 0 1.112-1.09 1.1 1.1 0 0 0-1.112-1.09zm5.423 0a1.1 1.1 0 0 0-1.11 1.091 1.1 1.1 0 0 0 1.11 1.09c.616 0 1.112-.488 1.112-1.09 0-.602-.496-1.09-1.112-1.09z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleHedgedoc(props) {
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