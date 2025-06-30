import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"></path><path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"></path><path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"></path><path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"></path><path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"></path><path d="M3.5 17.5 2 22l4.5-1.5"></path><path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"></path><path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: lucide | License: ISC (<https://github.com/lucide-icons/lucide/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function LucideMessageCircleDashed(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'none',
    stroke: 'currentColor',
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