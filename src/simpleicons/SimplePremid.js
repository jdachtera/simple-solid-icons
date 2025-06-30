import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>PreMiD</title><path d="M22.46 4.075c.85 0 1.54.69 1.54 1.54v12.77c0 .85-.69 1.54-1.54 1.54H1.54c-.85 0-1.54-.69-1.54-1.54V5.615c0-.85.69-1.54 1.54-1.54ZM3.442 8.485c-.4 0-.725.323-.725.724v5.673a.725.725 0 0 0 1.08.631l5.043-2.836a.725.725 0 0 0 0-1.263L3.797 8.577a.7.7 0 0 0-.355-.093m17.162 5.372h-7.698a.68.68 0 1 0 0 1.358h7.698a.68.68 0 1 0 0-1.358m0-2.446h-7.698a.68.68 0 1 0 0 1.359h7.698a.68.68 0 1 0 0-1.359m-3.17-2.445h-4.528a.68.68 0 1 0 0 1.359h4.528a.68.68 0 1 0 0-1.359">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePremid(props) {
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