import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>roadmap.sh</title><path d="M20.693 0H3.307A3.307 3.307 0 0 0 0 3.307v17.386A3.307 3.307 0 0 0 3.307 24h17.386A3.307 3.307 0 0 0 24 20.693V3.307A3.307 3.307 0 0 0 20.693 0zm-7.706 9.18c-.349.031-.689.078-1.021.142-.333.063-.65.134-.95.214a3.64 3.64 0 0 0-.736.237v8.097a5.522 5.522 0 0 1-.76.143c-.333.047-.68.07-1.045.07a5.87 5.87 0 0 1-.95-.07 1.588 1.588 0 0 1-.688-.285 1.476 1.476 0 0 1-.452-.57c-.095-.253-.142-.578-.142-.974V9.061c0-.364.063-.673.19-.926.142-.27.34-.507.594-.713a3.93 3.93 0 0 1 .926-.546 9.133 9.133 0 0 1 2.54-.736 8.093 8.093 0 0 1 1.378-.119c.76 0 1.361.15 1.804.451.444.285.665.76.665 1.425 0 .222-.032.443-.095.665a3.075 3.075 0 0 1-.237.57c-.341 0-.682.016-1.021.047zm5.113 8.453c-.412.443-.974.665-1.686.665s-1.274-.222-1.686-.665c-.412-.443-.617-.998-.617-1.662 0-.665.205-1.22.617-1.663.412-.443.974-.664 1.686-.664s1.274.221 1.686.664c.411.444.617.998.617 1.663 0 .664-.206 1.219-.617 1.662z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleRoadmapdotsh(props) {
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