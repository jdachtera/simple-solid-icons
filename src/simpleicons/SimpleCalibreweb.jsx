import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Calibre-Web</title><path d="M13.736.083q4.9353-.6785 5.5252 4.1915-1.104 5.4862-6.4778 7.1446-1.3131.3981-2.6673.1905-.409-.133-.6668-.4763a3.91 3.91 0 0 1 0-1.7147q4.0727.4425 6.4778-3.0484.8668-1.3161.5715-2.8578-.5576-1.2044-1.9052-1.1432-2.7075.4504-4.382 2.6674-3.9135 5.7548-2.4768 12.5745 1.59 5.4391 6.954 3.5246 1.458-.7474 2.6674-1.81 1.627.6834.8573 2.2864-4.452 3.9011-9.8119 1.4289-3.1384-2.512-3.5247-6.573-.858-7.33 3.62-13.1462Q10.673.9268 13.736.083">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCalibreweb(props) {
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