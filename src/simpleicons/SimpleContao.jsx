import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Contao</title><path d="M2.133 14.233c.672 3.125 1.23 6.1 3.189 8.242H1.588A1.602 1.602 0 0 1 0 20.897V3.109a1.6 1.6 0 0 1 1.588-1.584h2.698a10.317 10.317 0 0 0-1.718 2.028c-2.135 3.271-1.257 6.838-.435 10.68ZM22.411 1.525h-4.234c1.002 1.002 1.847 2.3 2.486 3.913l-6.437 1.358c-.706-1.351-1.779-2.476-3.877-2.034-1.156.245-1.923.894-2.264 1.604-.418.876-.624 1.858.377 6.525.999 4.667 1.588 5.481 2.327 6.112.601.511 1.57.794 2.727.55 2.1-.442 2.617-1.902 2.708-3.422l6.437-1.359c.153 3.329-.879 5.911-2.699 7.696h2.449A1.602 1.602 0 0 0 24 20.891V3.109a1.602 1.602 0 0 0-1.589-1.584Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleContao(props) {
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