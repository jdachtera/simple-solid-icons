import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M4 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M20 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M20 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 3m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 21l-8 -4v-10l8 -4l8 4v10z"></path><path d="M9.1 15a2.1 2.1 0 0 1 -.648 -4.098c.282 -1.648 1.319 -2.902 3.048 -2.902c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 0 1 .202 4.19l-.202 .01h-5.8z"></path><path d="M4 7l4.323 2.702"></path><path d="M16.413 14.758l3.587 2.242"></path><path d="M4 17l3.529 -2.206"></path><path d="M14.609 10.37l5.391 -3.37"></path><path d="M12 3v5"></path><path d="M12 15v6">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerBrandStorj(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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