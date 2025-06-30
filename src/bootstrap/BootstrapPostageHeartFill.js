import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M4.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM8 11C2.175 7.236 6.336 4.31 8 5.982 9.664 4.309 13.825 7.236 8 11"></path><path d="M4.5 0a1 1 0 0 1-2 0H1v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 1 1 0 2v1a1 1 0 1 1 0 2v1h1.5a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0H15v-1a1 1 0 1 1 0-2v-1a1 1 0 1 1 0-2V9a1 1 0 1 1 0-2V6a1 1 0 1 1 0-2V3a1 1 0 1 1 0-2V0h-1.5a1 1 0 1 1-2 0h-1a1 1 0 1 1-2 0h-1a1 1 0 0 1-2 0zM4 14a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: bootstrap | License: MIT (<https://github.com/twbs/icons/blob/main/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function BootstrapPostageHeartFill(props) {
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