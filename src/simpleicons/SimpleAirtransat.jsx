import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Air Transat</title><path d="M17.611 0c-2.931.916-5.68 3.434-8.474 6.137C5.564 6.32 1.672 7.74 1.26 7.969c4.122 2.152 5.129 3.115 5.129 3.115s-1.374 3.938-1.649 6.457c.916-2.244 2.702-5.312 3.801-6.777-1.511-1.237-4.35-2.565-4.35-2.565s2.244-.962 6.733-1.191c0 0 1.878-3.619 6.687-7.008zm-2.244 3.344c-.412.87-1.146 2.793-1.283 4.213 3.16.229 5.312.963 5.312.963s-3.205 1.19-4.992 2.609c.32.779 1.055 3.07 1.467 4.855-.687-.64-2.748-2.336-4.26-3.252C9.596 13.511 4.1 18.962 1.031 24c1.328-1.374 5.267-5.817 10.58-9.023 1.1.64 6.137 3.939 6.137 3.939s-1.1-5.862-1.512-7.236c1.558-1.054 4.214-2.52 6.733-3.3-3.527-1.419-7.832-1.784-7.832-1.784s-.09-1.1.23-3.252z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAirtransat(props) {
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