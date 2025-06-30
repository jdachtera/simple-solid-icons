import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>pantone</title><g id=Layer_2 data-name="Layer 2"><g id=pantone><g id=pantone-2 data-name=pantone><path d=M20,13.18H15.94l2.3-2.47a1,1,0,0,0,0-1.41L14.05,5.44a.93.93,0,0,0-.71-.26,1,1,0,0,0-.7.31l-1.82,2V4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V17.09A3.91,3.91,0,0,0,6.91,21H20a1,1,0,0,0,1-1V14.18A1,1,0,0,0,20,13.18ZM13.42,7.59l2.67,2.49-5.27,5.66V10.38ZM8.82,10v3H5V10Zm0-5V8H5V5ZM5,17.09V15H8.82v2.09a1.91,1.91,0,0,1-3.82,0ZM19,19H10.51l3.56-3.82H19Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlinePantoneOutline(props) {
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