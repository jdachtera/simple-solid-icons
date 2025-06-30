import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.408 5.89c.681 0 1.138.47 1.187 1.107h1.147v-.11c-.053-1.187-1.024-2-2.343-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.906 2.73 2.518 2.73 1.314 0 2.285-.792 2.343-1.939v-.114H6.595c-.049.615-.497 1.05-1.187 1.05-.84 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754Zm5.404 0c.68 0 1.138.47 1.186 1.107h1.147v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.742c0-1.112.488-1.754 1.319-1.754Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: bootstrap | License: MIT (<https://github.com/twbs/icons/blob/main/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function BootstrapCcCircleFill(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 0.5,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
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