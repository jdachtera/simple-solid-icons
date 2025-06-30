import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Reliance Industries Limited</title><path d="M7.65 18.44c.717-1.506 1.356-3.046 1.661-4.787.119 1.818 1.2 3.435 1.72 5.177.199.842.214 1.714-.107 2.584-.349.948-.911 1.759-1.582 2.488C7.528 21.936 6.97 20.11 7.65 18.44zm11.547 3.765c-.825.623-1.902.716-2.744.311 0 0-.229-.093-.439-.34-1.6-1.868-3.215-3.725-4.828-5.583 1.431.264 3-.438 3.805-1.712.81-1.212.777-2.942.016-4.154-.916-1.324-2.695-1.758-4.19-1.555-2.588.373-4.447 2.722-5.026 5.182-.595 2.799-.166 5.44.761 7.932a6.87 6.87 0 0 0 .856 1.538c-2.727-1.215-5.137-3.45-6.402-6.457-1.4-3.232-1.372-7.324.294-10.606C2.608 4.225 4.923 1.876 7.789.884c1.157-.49 2.47-.746 3.81-.786h.716c1.91.057 3.838.55 5.435 1.466 3.548 1.807 6.232 6.3 6.244 10.314.123 4.153-1.674 7.915-4.797 10.327z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRelianceindustrieslimited(props) {
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