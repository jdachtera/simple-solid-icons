import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>CodersRank</title><path d="M23.134 8.64l-5.973-3.62a.286.286 0 0 0-.412.125l-1.4 3.286 2.842 1.696a.53.53 0 0 1 0 .921l-5.335 3.14-2.267 5.274a.127.127 0 0 0 .052.203.122.122 0 0 0 .134-.035l3.914-2.365 1.545 2.219a.373.373 0 0 0 .309.167h3.708a.367.367 0 0 0 .327-.2.382.382 0 0 0-.018-.386l-2.513-3.852 5.088-3.077c.577-.349.865-.74.865-1.172V9.813c0-.433-.288-.823-.866-1.172zM13.082 4.35L.845 12.052c-.577.348-.858.739-.845 1.171v1.173c.014.432.303.816.866 1.15l6.056 3.496a.286.286 0 0 0 .412-.146l1.36-3.286-2.884-1.633a.518.518 0 0 1-.275-.384.529.529 0 0 1 .254-.537l5.295-3.245 2.183-5.316a.128.128 0 0 0-.04-.142.122.122 0 0 0-.146-.005z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCodersrank(props) {
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