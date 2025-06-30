import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>github</title><g id=Layer_2 data-name="Layer 2"><g id=github><g id=github-2 data-name=github><g id=mobile-2><g id=Group-9><g id=Group-11><path id=Fill-1 d=M12,1A10.89,10.89,0,0,0,1,11.77,10.79,10.79,0,0,0,8.52,22c.55.1.75-.23.75-.52s0-.93,0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86,2.86,0,0,0-1.22-1.58c-1-.66.08-.65.08-.65a2.31,2.31,0,0,1,1.68,1.11,2.37,2.37,0,0,0,3.2.89,2.33,2.33,0,0,1,.7-1.44c-2.44-.27-5-1.19-5-5.32A4.15,4.15,0,0,1,6.11,8.31a3.78,3.78,0,0,1,.11-2.84s.93-.29,3,1.1a10.68,10.68,0,0,1,5.5,0c2.1-1.39,3-1.1,3-1.1a3.78,3.78,0,0,1,.11,2.84A4.15,4.15,0,0,1,19,11.2c0,4.14-2.58,5.05-5,5.32a2.5,2.5,0,0,1,.75,2c0,1.44,0,2.6,0,2.95s.2.63.75.52A10.8,10.8,0,0,0,23,11.77,10.89,10.89,0,0,0,12,1>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaFillGithub(props) {
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