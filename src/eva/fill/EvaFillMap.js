import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>map</title><g id=Layer_2 data-name="Layer 2"><g id=map><g id=map-2 data-name=map><path d=M20.41,5.89l-4-1.8-.05,0-.12,0-.12,0h-.25l-.1,0-.13,0-.05,0L12,5.7,8.41,4.09l-.05,0L8.24,4,8.12,4H7.87l-.1,0-.13,0,0,0-4,1.8A1,1,0,0,0,3,6.8V19a1,1,0,0,0,.46.84A1,1,0,0,0,4,20a1,1,0,0,0,.41-.09L8,18.3l3.59,1.61h.05a.85.85,0,0,0,.72,0h.05L16,18.3l3.59,1.61A1,1,0,0,0,20,20a1,1,0,0,0,.54-.16A1,1,0,0,0,21,19V6.8A1,1,0,0,0,20.41,5.89ZM9,6.55l2,.89v10l-2-.89Zm10,10.9-2-.89v-10l2,.89Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillMap(props) {
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