import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>droplet-off-outline</title><g id=Layer_2 data-name="Layer 2"><g id=droplet-off-outline><g id=droplet-off-outline-2 data-name=droplet-off-outline><path d=M12,19h0a5.4,5.4,0,0,1-3.88-1.64,5.73,5.73,0,0,1-.69-7.11L6,8.82a7.74,7.74,0,0,0,.7,9.94A7.37,7.37,0,0,0,12,21h0a7.36,7.36,0,0,0,4.58-1.59L15.15,18A5.43,5.43,0,0,1,12,19Z></path><path d=M12,5.43l3.88,4a5.71,5.71,0,0,1,1.49,5.15L19,16.15A7.72,7.72,0,0,0,17.31,8L12.71,3.3A1,1,0,0,0,12,3h0a1,1,0,0,0-.72.3L8.73,5.9l1.42,1.42Z></path><path d=M20.71,19.29l-16-16A1,1,0,0,0,3.29,4.71l16,16a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineDropletOffOutline(props) {
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