import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>VOX</title><path d="M0 8.198l4.182 7.604h2.442L8.15 13.07a4.276 4.276 0 0 1 2.054-4.872H7.112l-1.677 3.216-1.706-3.216zm14.342 0a4.24 4.24 0 0 1 1.923 2.206c.784 2.081-.098 4.415-2.145 5.398h2.767l1.564-1.754 1.42 1.754H24l-3.505-4.032 3.088-3.572H19.41l-.952 1.249-.931-1.249zm-2.09 1.596c-.949 0-1.913.69-2.074 1.775a2.132 2.132 0 0 0 2.064 2.483c1.268.01 2.192-1.126 2.156-2.18-.013-1.015-.877-2.08-2.146-2.078z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleVox(props) {
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