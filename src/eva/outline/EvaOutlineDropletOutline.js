import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>droplet-outline</title><g id=Layer_2 data-name="Layer 2"><g id=droplet-outline><g id=droplet-outline-2 data-name=droplet-outline><path d=M12,21.1a7.4,7.4,0,0,1-5.28-2.28A7.73,7.73,0,0,1,6.82,8.05L11.46,3.4a.94.94,0,0,1,.71-.3h0a1,1,0,0,1,.71.31l4.56,4.72a7.73,7.73,0,0,1-.09,10.77A7.33,7.33,0,0,1,12,21.1Zm.13-15.57L8.24,9.45a5.74,5.74,0,0,0-.07,8A5.43,5.43,0,0,0,12,19.1h0a5.42,5.42,0,0,0,3.9-1.61,5.72,5.72,0,0,0,.06-8Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineDropletOutline(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24.2 24.2',
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