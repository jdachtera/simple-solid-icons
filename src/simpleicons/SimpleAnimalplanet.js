import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Animal Planet</title><path d="m18.814 5.94-.494.858c2.605.509 4.118 1.618 4.118 2.917 0 .865-.649 1.696-1.762 1.696-1.699 0-2.949-2.673-2.949-2.673-.356-.011-.993-.026-.993-.026s-1.822-2.342-4.595-3.168v3.798c.244.205.559.499.855.863-1.252-.757-2.552-1.317-4.847-1.317-2.496 0-5.547 1.007-7.242 3.763l.178.322c.773-.873 1.968-1.402 2.006-1.416C1.424 13.012.469 15.427 0 16.998l1.456 1.457a10.687 10.687 0 0 1 8.055-3.588c2.77 0 5.582 1.157 7.534 3.157l1.577-1.579c-1.324-2.263-2.924-3.861-2.972-3.909.068.031 1.487.85 3.975.85 2.312 0 4.375-1.285 4.375-3.203 0-2.292-1.965-3.745-5.186-4.243">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAnimalplanet(props) {
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