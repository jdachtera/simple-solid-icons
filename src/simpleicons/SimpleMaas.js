import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>MAAS</title><path d="M12 0C5.383 0 0 5.384 0 12s5.383 12 12 12 12-5.384 12-12S18.617 0 12 0zM6.343 6.257h11.314c.284 0 .514.23.514.515v.685c0 .285-.23.515-.514.515H6.343a.515.515 0 0 1-.515-.515v-.685c0-.284.23-.515.515-.515zm0 3.257h11.314c.284 0 .514.23.514.515v.685c0 .285-.23.515-.514.515H6.343a.515.515 0 0 1-.515-.515v-.685c0-.284.23-.515.515-.515zm0 3.257h11.314c.284 0 .514.23.514.515v.685c0 .285-.23.515-.514.515H6.343a.515.515 0 0 1-.514-.515v-.685c0-.284.23-.515.514-.515zm0 3.258h11.314c.284 0 .514.23.514.513v.687c0 .284-.23.515-.514.515H6.343a.515.515 0 0 1-.514-.515v-.687c0-.284.23-.513.514-.513z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMaas(props) {
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