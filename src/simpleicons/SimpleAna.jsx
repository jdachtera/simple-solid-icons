import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>ANA</title><path d="M19.11 8.975l-3.454 6.05h3.432l3.455-6.05zm3.933 0l-3.455 6.05h.959L24 8.975zm-10.01.781H14.8l.403 5.27h-1.31l-.025-.58a.206.206 0 0 0-.202-.227h-1.867l.429-.757h1.21c.151 0 .328.026.328-.202l-.202-2.37c0-.15-.126-.226-.227-.075L11.193 15h-.882zm-9.983 0h1.74l.353 5.27h-1.31l-.026-.58a.226.226 0 0 0-.227-.227H1.563l.429-.757h1.386c.151 0 .328.026.328-.202l-.151-2.37c0-.15-.126-.226-.227-.075L.882 15H0zm3.278 0h1.79l1.16 4.084c.05.126.15.101.176 0l.756-4.084h.782l-.933 5.27H8.244l-1.135-4.034c-.025-.101-.151-.127-.176 0l-.706 4.033h-.832Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAna(props) {
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