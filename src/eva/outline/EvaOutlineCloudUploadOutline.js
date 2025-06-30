import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>cloud-upload</title><g id=Layer_2 data-name="Layer 2"><g id=cloud-upload><g id=cloud-upload-2 data-name=cloud-upload><path d=M12.71,11.29a1,1,0,0,0-1.4,0l-3,2.9a1,1,0,1,0,1.38,1.44L11,14.36V20a1,1,0,0,0,2,0V14.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z></path><path d=M17.67,7A6,6,0,0,0,6.33,7a5,5,0,0,0-3.08,8.27A1,1,0,1,0,4.75,14,3,3,0,0,1,7,9h.1a1,1,0,0,0,1-.8,4,4,0,0,1,7.84,0,1,1,0,0,0,1,.8H17a3,3,0,0,1,2.25,5,1,1,0,0,0,.09,1.42,1,1,0,0,0,.66.25,1,1,0,0,0,.75-.34A5,5,0,0,0,17.67,7Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineCloudUploadOutline(props) {
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