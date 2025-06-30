import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>gift</title><g id=Layer_2 data-name="Layer 2"><g id=gift><g id=gift-2 data-name=gift><path d=M4.64,15.27v4.82a.92.92,0,0,0,.92.91h5.62V15.27Z></path><path d=M12.82,21h5.62a.92.92,0,0,0,.92-.91V15.27H12.82Z></path><path d=M20.1,7.09H18.26a2.82,2.82,0,0,0,.29-1.23A2.87,2.87,0,0,0,15.68,3,4.21,4.21,0,0,0,12,5.57,4.21,4.21,0,0,0,8.32,3,2.87,2.87,0,0,0,5.45,5.86a2.82,2.82,0,0,0,.29,1.23H3.9c-.5,0-.9.59-.9,1.31v3.93c0,.72.4,1.31.9,1.31h7.28V7.09h1.64v6.55H20.1c.5,0,.9-.59.9-1.31V8.4C21,7.68,20.6,7.09,20.1,7.09Zm-11.78,0a1.23,1.23,0,1,1,0-2.45c1.4,0,2.19,1.44,2.58,2.45Zm7.36,0H13.1c.39-1,1.18-2.45,2.58-2.45a1.23,1.23,0,1,1,0,2.45Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillGift(props) {
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