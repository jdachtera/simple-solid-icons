import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path stroke=none d="M0 0h24v24H0z"fill=none></path><path d="M10 4l2 1l2 -1"></path><path d="M12 2v6.5l3 1.72"></path><path d="M17.928 6.268l.134 2.232l1.866 1.232"></path><path d="M20.66 7l-5.629 3.25l.01 3.458"></path><path d="M19.928 14.268l-1.866 1.232l-.134 2.232"></path><path d="M20.66 17l-5.629 -3.25l-2.99 1.738"></path><path d="M14 20l-2 -1l-2 1"></path><path d="M12 22v-6.5l-3 -1.72"></path><path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232"></path><path d="M3.34 17l5.629 -3.25l-.01 -3.458"></path><path d="M4.072 9.732l1.866 -1.232l.134 -2.232"></path><path d="M3.34 7l5.629 3.25l2.99 -1.738">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: tabler | License: MIT (<https://github.com/tabler/tabler-icons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function TablerSnowflake(props) {
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