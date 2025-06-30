import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M3 3l18 18"></path><path d="M8.469 8.46a5 5 0 0 0 7.058 7.084"></path><path d="M16.913 12.936a5 5 0 0 0 -5.826 -5.853"></path><path d="M12 7v-4"></path><path d="M11 3h2"></path><path d="M15.536 8.464l2.828 -2.828"></path><path d="M17.657 4.929l1.414 1.414"></path><path d="M17 12h4"></path><path d="M21 11v2"></path><path d="M18.364 18.363l-.707 .707"></path><path d="M12 17v4"></path><path d="M13 21h-2"></path><path d="M8.465 15.536l-2.829 2.828"></path><path d="M6.343 19.071l-1.413 -1.414"></path><path d="M7 12h-4"></path><path d="M3 13v-2"></path><path d="M5.636 5.637l-.707 .707">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerVirusOff(props) {
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