import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>done-all</title><g id=Layer_2 data-name="Layer 2"><g id=done-all><g id=done-all-2 data-name=done-all><path d=M16.62,6.21a1,1,0,0,0-1.41.17l-7,9L4.78,11.2a1,1,0,1,0-1.56,1.25l4.17,5.18a1,1,0,0,0,.78.37h0A1,1,0,0,0,9,17.62l7.83-10A1,1,0,0,0,16.62,6.21Z></path><path d=M21.62,6.21a1,1,0,0,0-1.41.17l-7,9-.61-.75-1.26,1.62,1.1,1.37a1,1,0,0,0,.78.37h0a1,1,0,0,0,.78-.38l7.83-10A1,1,0,0,0,21.62,6.21Z></path><path d=M8.71,13.06,10,11.44l-.2-.24A1,1,0,0,0,8.37,11a1,1,0,0,0-.15,1.41Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineDoneAllOutline(props) {
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