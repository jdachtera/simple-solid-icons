import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Foxtel</title><path d="M2.867 10.631l.341-1.024H0v4.779h1.16v-1.72h1.434l.341-1.024H1.16v-1.01zm3.03-1.085a2.454 2.454 0 1 0-.006 4.908 2.454 2.454 0 0 0 .007-4.908zm0 3.74a1.287 1.287 0 1 1-.007-2.574 1.287 1.287 0 0 1 .008 2.575zm6.506-3.679h-1.297l-.812 1.304-.82-1.304H8.177l1.468 2.335-1.536 2.444h1.297l.888-1.405.88 1.405h1.297l-1.529-2.444zm.102 1.024h1.413v3.755h1.16V10.63h1.23V9.607h-3.16zm7.304 0l.341-1.024h-3.208v4.779h2.867l.341-1.024h-2.046v-.915h1.432l.341-1.024h-1.773v-.792zm2.143 2.73V9.608h-1.16v4.779h2.867L24 13.362Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFoxtel(props) {
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