import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>folder-add</title><g id=Layer_2 data-name="Layer 2"><g id=folder-add><g id=folder-add-2 data-name=folder-add><path d=M14,13H13V12a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V15h1a1,1,0,0,0,0-2Z></path><path d=M19.5,7.05h-7L9.87,3.87A1,1,0,0,0,9.1,3.5H4.5A2.47,2.47,0,0,0,2,5.93V18.07A2.47,2.47,0,0,0,4.5,20.5h15A2.47,2.47,0,0,0,22,18.07V9.48A2.47,2.47,0,0,0,19.5,7.05Zm.5,11a.46.46,0,0,1-.5.43H4.5a.46.46,0,0,1-.5-.43V5.93a.46.46,0,0,1,.5-.43H8.63l2.6,3.18a1,1,0,0,0,.77.37h7.5a.46.46,0,0,1,.5.43Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineFolderAddOutline(props) {
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