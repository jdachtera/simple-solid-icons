import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Lunacy</title><path d="M12.031 6h-6v12h11.996v-6l-5.996 5.996Zm6.563 2.309a4.013 4.013 0 0 1-2.371-2.375 4.03 4.03 0 0 1-2.375 2.375 4.04 4.04 0 0 1 2.375 2.375 4.013 4.013 0 0 1 2.37-2.375ZM0 9.602c0-3.364 0-5.043.652-6.325A6.044 6.044 0 0 1 3.277.652C4.56 0 6.238 0 9.602 0h4.796c3.364 0 5.043 0 6.325.652a6.044 6.044 0 0 1 2.625 2.625C24 4.56 24 6.238 24 9.602v4.796c0 3.364 0 5.043-.652 6.325a6.044 6.044 0 0 1-2.625 2.625C19.44 24 17.762 24 14.398 24H9.602c-3.364 0-5.043 0-6.325-.652a6.044 6.044 0 0 1-2.625-2.625C0 19.44 0 17.762 0 14.398Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLunacy(props) {
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