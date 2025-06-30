import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>globe-2</title><g id=Layer_2 data-name="Layer 2"><g id=globe-2><g id=globe-2-2 data-name=globe-2><path d=M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a8.19,8.19,0,0,1,1.79.21,2.61,2.61,0,0,1-.78,1c-.22.17-.46.31-.7.46a4.56,4.56,0,0,0-1.85,1.67,6.49,6.49,0,0,0-.62,3.3c0,1.36,0,2.16-.95,2.87-1.37,1.07-3.46.47-4.76-.07A8.33,8.33,0,0,1,4,12,8,8,0,0,1,12,4Zm4.89,14.32a6.79,6.79,0,0,0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1,.38-2l.1-.17A4.77,4.77,0,0,0,17,12.09a5.42,5.42,0,0,1,.09-1c.16-.73,1.71-.93,2.67-1a7.94,7.94,0,0,1-2.86,8.28Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillGlobe2(props) {
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