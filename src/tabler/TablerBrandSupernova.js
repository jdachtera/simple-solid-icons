import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M15 15h.5c3.038 0 5.5 -1.343 5.5 -3s-2.462 -3 -5.5 -3c-1.836 0 -3.462 .49 -4.46 1.245"></path><path d="M9 9h-.5c-3.038 0 -5.5 1.343 -5.5 3s2.462 3 5.5 3c1.844 0 3.476 -.495 4.474 -1.255"></path><path d="M15 9v-.5c0 -3.038 -1.343 -5.5 -3 -5.5s-3 2.462 -3 5.5c0 1.833 .49 3.457 1.241 4.456"></path><path d="M9 15v.5c0 3.038 1.343 5.5 3 5.5s3 -2.462 3 -5.5c0 -1.842 -.494 -3.472 -1.252 -4.47">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandSupernova(props) {
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