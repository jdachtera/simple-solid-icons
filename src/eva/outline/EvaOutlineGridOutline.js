import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>grid</title><g id=Layer_2 data-name="Layer 2"><g id=grid><g id=grid-2 data-name=grid><path d=M9,3H5A2,2,0,0,0,3,5V9a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V5A2,2,0,0,0,9,3ZM5,9V5H9V9Z></path><path d=M19,3H15a2,2,0,0,0-2,2V9a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3ZM15,9V5h4V9Z></path><path d=M9,13H5a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V15A2,2,0,0,0,9,13ZM5,19V15H9v4Z></path><path d=M19,13H15a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V15A2,2,0,0,0,19,13Zm-4,6V15h4v4Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineGridOutline(props) {
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