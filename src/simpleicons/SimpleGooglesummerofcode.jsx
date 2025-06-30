import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Google Summer of Code</title><path d="m11.995 0-.954.954L9.24 2.758l-.755.725h-4.97v5.001L0 12.004l2.758 2.76.755.752v4.973h4.971L11.995 24l3.523-3.511h4.961v-4.973L24 12.005l-3.52-3.521v-5h-5.01zm0 5.068a6.928 6.928 0 0 1 6.94 6.918v.019a6.937 6.937 0 1 1-6.94-6.937Zm.436 3.457-1.709 6.339.94.253 1.709-6.339zm1.97 1.047-.715.649 1.431 1.594-1.431 1.593.725.649 2.013-2.242zm-4.8.01-2.014 2.242L9.6 14.075l.725-.648-1.431-1.594 1.431-1.603z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGooglesummerofcode(props) {
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