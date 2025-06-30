import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>hash</title><g id=Layer_2 data-name="Layer 2"><g id=hash><g id=hash-2 data-name=hash><path d=M20,14H15.7l.73-4H20a1,1,0,0,0,0-2H16.79l.69-3.81A1,1,0,0,0,16.64,3a1,1,0,0,0-1.22.82L14.67,8H10.79l.69-3.81A1,1,0,0,0,10.64,3a1,1,0,0,0-1.22.82L8.67,8H4a1,1,0,0,0,0,2H8.3l-.73,4H4a1,1,0,0,0,0,2H7.21l-.69,3.81A1,1,0,0,0,7.36,21h0a1,1,0,0,0,1.22-.82L9.33,16h3.88l-.69,3.81A1,1,0,0,0,13.36,21h0a1,1,0,0,0,1.22-.82L15.33,16H20a1,1,0,0,0,0-2ZM9.7,14l.73-4H14.3l-.73,4Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillHash(props) {
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