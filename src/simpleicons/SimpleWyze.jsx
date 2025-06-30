import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Wyze</title><path d="M5.475 13.171 7.3 9.469h.974L5.779 14.53h-.608l-1.034-2.082-1.034 2.082h-.609L0 9.469h.973l1.826 3.673.851-1.706-.973-1.967h.973l1.825 3.702Zm8.457-3.702-2.251 3.442v1.591h-.882v-1.591L8.517 9.469h1.034l1.673 2.545 1.673-2.545h1.035Zm5.444 4.194H24v.867h-4.624v-.867Zm0-4.194H24v.868h-4.624v-.868Zm0 2.083H24v.867h-4.624v-.867Zm-.273-2.083-3.438 4.223h3.133v.838H13.84l3.407-4.222h-3.042v-.839h4.898Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWyze(props) {
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