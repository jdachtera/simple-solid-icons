import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Meizu</title><path d="M20.045 18.818h3.546A.41.41 0 0 0 24 18.41v-3.545a.41.41 0 0 0-.41-.41h-3.545a.41.41 0 0 0-.409.41v3.545c0 .226.184.41.41.41zM13.8 12.11a.095.095 0 0 1-.163-.068V5.591a.41.41 0 0 0-.409-.41H10.59a.545.545 0 0 0-.385.16L.16 15.387a.545.545 0 0 0-.16.385v2.638c0 .226.183.41.41.41h2.637a.547.547 0 0 0 .385-.16l6.769-6.769a.096.096 0 0 1 .163.068v6.451c0 .226.183.41.409.41h2.638a.547.547 0 0 0 .385-.16L23.84 8.613A.545.545 0 0 0 24 8.23V5.59a.41.41 0 0 0-.41-.41h-2.637a.546.546 0 0 0-.386.16z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleMeizu(props) {
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