import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Botble CMS</title><path d="M12 9.371c-1.613 0-3.09.54-4.3 1.426V0S5.624.434 4.686 1.313l.036 15.742C4.918 20.918 8.086 24 12 24c.547 0 1.074-.07 1.59-.184v-3.105a4.318 4.318 0 0 1-1.59.312 4.336 4.336 0 0 1 0-8.671 4.321 4.321 0 0 1 4.313 4.109l.09 6.031c1.757-1.332 2.91-3.426 2.91-5.805A7.315 7.315 0 0 0 12 9.372Zm1.523 7.512c0 .84-.683 1.523-1.523 1.523a1.525 1.525 0 0 1 0-3.05c.84 0 1.523.683 1.523 1.527Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBotblecms(props) {
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