import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>printer</title><g id=Layer_2 data-name="Layer 2"><g id=printer><g id=printer-2 data-name=printer><path d=M19.36,7H18V5a1.92,1.92,0,0,0-1.83-2H7.83A1.92,1.92,0,0,0,6,5V7H4.64A2.66,2.66,0,0,0,2,9.67v6.66A2.66,2.66,0,0,0,4.64,19H5.5a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2h.86A2.66,2.66,0,0,0,22,16.33V9.67A2.66,2.66,0,0,0,19.36,7ZM8,5h8V7H8ZM7.5,19V15h9v4ZM20,16.33a.66.66,0,0,1-.64.67H18.5V15a2,2,0,0,0-2-2h-9a2,2,0,0,0-2,2v2H4.64A.66.66,0,0,1,4,16.33V9.67A.66.66,0,0,1,4.64,9H19.36a.66.66,0,0,1,.64.67Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlinePrinterOutline(props) {
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