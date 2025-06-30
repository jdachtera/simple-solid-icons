import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><defs></defs><title>sync</title><g id=Layer_2 data-name="Layer 2"><g id=sync><g id=sync-2 data-name=sync><g><rect width=24 height=24></rect></g><path d=M21.66,10.37a.62.62,0,0,0,.07-.19l.75-4a1,1,0,0,0-2-.36l-.37,2a9.22,9.22,0,0,0-16.58.84,1,1,0,0,0,.55,1.3,1,1,0,0,0,1.31-.55A7.08,7.08,0,0,1,12.07,5a7.17,7.17,0,0,1,6.24,3.58l-1.65-.27a1,1,0,1,0-.32,2l4.25.71h.16a.93.93,0,0,0,.34-.06.33.33,0,0,0,.1-.06.78.78,0,0,0,.2-.11l.08-.1a1.07,1.07,0,0,0,.14-.16A.58.58,0,0,0,21.66,10.37Z></path><path d=M19.88,14.07a1,1,0,0,0-1.31.56A7.08,7.08,0,0,1,11.93,19a7.17,7.17,0,0,1-6.24-3.58l1.65.27.16,0a1,1,0,0,0,.16-2L3.41,13a.91.91,0,0,0-.33,0H3a1.15,1.15,0,0,0-.32.14l0,0a1,1,0,0,0-.18.18l-.09.1a.84.84,0,0,0-.07.19.44.44,0,0,0-.07.17l-.75,4A1,1,0,0,0,2.32,19l.18,0a1,1,0,0,0,1-.82l.37-2a9.22,9.22,0,0,0,16.58-.83A1,1,0,0,0,19.88,14.07Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: eva | License: MIT (<https://github.com/akveo/eva-icons/blob/master/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function EvaOutlineSyncOutline(props) {
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