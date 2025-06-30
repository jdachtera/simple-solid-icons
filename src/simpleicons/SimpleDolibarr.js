import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Dolibarr</title><path d="M20.275 0a3.18 3.168 0 0 0-3.18 3.169 3.18 3.168 0 0 0 3.18 3.168 3.18 3.168 0 0 0 3.18-3.168A3.18 3.168 0 0 0 20.275 0ZM.545.353v23.645H7.63L7.64 7.104h2.395c4.066 0 6.099 1.602 6.099 4.806 0 3.41-2.068 5.115-6.204 5.115H8.794v6.97s1.683.005 2.114.005c3.67 0 6.67-1.125 9-3.376 2.33-2.25 3.495-5.155 3.495-8.714 0-2.072-.423-3.903-1.268-5.493a3.803 3.803 0 0 1-1.86.495c-.982 0-1.96-.403-2.654-1.096a3.782 3.782 0 0 1-1.1-2.647c0-.533.12-1.063.34-1.548C14.913.776 12.557.353 9.79.353Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleDolibarr(props) {
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