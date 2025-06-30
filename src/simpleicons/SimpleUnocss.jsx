import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>UnoCSS</title><path d="M12.8602 18.3991c0-3.0761 2.4938-5.5699 5.5699-5.5699S24 15.323 24 18.3991c0 3.0762-2.4938 5.5699-5.5699 5.5699s-5.5699-2.4937-5.5699-5.5699ZM12.8602 5.6009c0-3.0762 2.4938-5.57 5.5699-5.57S24 2.5248 24 5.601v5.0129a.557.557 0 0 1-.557.5569H13.4172a.557.557 0 0 1-.557-.5569v-5.013ZM11.1398 18.3991c0 3.0762-2.4937 5.5699-5.5699 5.5699C2.4937 23.969 0 21.4753 0 18.3991v-5.0129a.557.557 0 0 1 .557-.557h10.0258a.557.557 0 0 1 .557.557v5.0129Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleUnocss(props) {
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