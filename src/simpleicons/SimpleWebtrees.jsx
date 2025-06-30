import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>webtrees</title><path d="M2.957 4.34q.647 0 1.269.243.634.243 1.093.7.459.448.662 1l1.592 4.59 1.31-3.82Q9.84 4.26 11.92 4.26q.459 0 1.106.203.729.23 1.228.809.5.58.905 1.782l1.296 3.82 1.606-4.59q.189-.54.649-.998.472-.459 1.079-.703.608-.243 1.283-.243.62.04 1.241.338.783.378 1.228 1.106.459.73.459 1.66 0 .81-.364 1.54l-4.225 8.652q-1.025 2.106-3.037 2.106-.905-.04-1.634-.567-.728-.54-1.133-1.498L12 13.72l-1.606 3.955q-.243.634-.647 1.093-.406.447-.945.702-.54.257-1.134.27-1.013 0-1.755-.486-.742-.5-1.297-1.62L.392 8.983Q0 8.16 0 7.443q0-.89.46-1.632.459-.756 1.254-1.134.622-.297 1.243-.337Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWebtrees(props) {
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