import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Bamboo</title><path d="M21.7142 13.6433h-4.9888a.651.651 0 00-.655.555 4.1139 4.1139 0 01-4.0619 3.5299l1.35 6.1728a10.3737 10.3737 0 009.0077-9.5447.651.651 0 00-.652-.713zm-8.6327-.158l7.1998-6.1718a.645.645 0 000-.984L13.0815.1597a.648.648 0 00-1.074.483v12.3426a.651.651 0 001.073.5zm-11.3547 1.505A10.3847 10.3847 0 0012.0115 24v-6.2698a4.0929 4.0929 0 01-4.0999-4.0869zm-.096-1.447v.1h6.2798a4.0929 4.0929 0 014.098-4.0879l-1.348-6.1698a10.3697 10.3697 0 00-9.0298 10.1577">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBamboo(props) {
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