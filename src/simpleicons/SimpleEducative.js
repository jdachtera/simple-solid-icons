import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Educative</title><path d="M20 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 3.998 4h16A4 4 0 0 0 24 20V4a4 4 0 0 0-4-4ZM5.397 19.576l-1.828-1.673a.316.316 0 0 1-.018-.445l4.004-4.376a.314.314 0 0 0 .009-.415L3.82 8.217a.315.315 0 0 1 .038-.443l1.893-1.595a.315.315 0 0 1 .443.038l5.495 6.537a.316.316 0 0 1-.008.417L5.84 19.559a.315.315 0 0 1-.442.018zm15.147-.102c0 .174-.141.315-.315.315H11.74a.315.315 0 0 1-.314-.315v-2.332c0-.174.14-.315.314-.315h8.488c.174 0 .315.14.315.315z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleEducative(props) {
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