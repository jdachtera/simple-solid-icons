import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>mic</title><g id=Layer_2 data-name="Layer 2"><g id=mic><g id=mic-2 data-name=mic><path d=M12,15a4,4,0,0,0,4-4V6A4,4,0,0,0,8,6v5A4,4,0,0,0,12,15Z></path><path d=M19,11a1,1,0,0,0-2,0A5,5,0,0,1,7,11a1,1,0,0,0-2,0,7,7,0,0,0,6,6.92V20H8.89a.89.89,0,0,0-.89.89v.22a.89.89,0,0,0,.89.89h6.22a.89.89,0,0,0,.89-.89v-.22a.89.89,0,0,0-.89-.89H13V17.92A7,7,0,0,0,19,11Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillMic(props) {
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