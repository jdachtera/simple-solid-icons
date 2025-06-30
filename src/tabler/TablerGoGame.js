import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M3 12h7m4 0h7"></path><path d="M3 6h1m4 0h13"></path><path d="M3 18h1m4 0h8m4 0h1"></path><path d="M6 3v1m0 4v8m0 4v1"></path><path d="M12 3v7m0 4v7"></path><path d="M18 3v13m0 4v1">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerGoGame(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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