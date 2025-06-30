import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Thanos</title><path d="M0 0v24h16.998A7.002 7.002 0 0 0 24 16.998V0Zm18.707 15.129h.896v.895h-.896zm-.281-3.857h1.455v1.456h-1.455Zm-.224-3.801h1.903v1.905h-1.903Zm-3.073 11.234h.895v.896h-.896zm-.28-3.902h1.456v1.457h-1.456zm-.224-3.755h1.906v1.904h-1.904Zm.224-1.897V7.696h1.456V9.15Zm-6.874 9.554h.896v.896h-.896Zm-.28-3.856h1.456v1.454H7.695Zm.28-2.401v-.896h.896v.896zm-.28-4.752h1.456V9.15H7.695ZM4.4 18.706h.897v.895h-.897Zm0-3.577h.897v.895h-.897Zm-.28-3.857h1.455v1.456H4.12Zm-.224-3.801h1.904v1.905H3.895Zm-.837-4.413H20.94v3.577h-7.153v14.307h-3.576V6.635H3.058Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleThanos(props) {
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