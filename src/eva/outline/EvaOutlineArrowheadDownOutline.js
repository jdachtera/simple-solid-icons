import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>arrowhead-down</title><g id=Layer_2 data-name="Layer 2"><g id=arrowhead-down><g id=arrowhead-down-2 data-name=arrowhead-down><path d=M17.37,12.39,12,16.71,6.64,12.23a1,1,0,1,0-1.28,1.54l6,5a1,1,0,0,0,1.27,0l6-4.83a1,1,0,0,0,.15-1.41A1,1,0,0,0,17.37,12.39Z></path><path d=M11.36,11.77a1,1,0,0,0,1.27,0l6-4.83a1,1,0,0,0,.15-1.41,1,1,0,0,0-1.41-.15L12,9.71,6.64,5.23A1,1,0,0,0,5.36,6.77Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineArrowheadDownOutline(props) {
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