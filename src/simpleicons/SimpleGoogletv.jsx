import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Google TV</title><path d="M3.11 3.245A3.117 3.117 0 0 0 0 6.355V13.7a1.87 1.87 0 0 0 1.878 1.878h2.588V5.124c0-.73.313-1.399.814-1.879zm3.944 0a1.87 1.87 0 0 0-1.879 1.879V7.71h16.947v.021c.73 0 1.398.313 1.878.814v-2.19a3.117 3.117 0 0 0-3.11-3.11zm12.48 5.176v10.455c0 .73-.313 1.399-.814 1.879h2.17a3.117 3.117 0 0 0 3.11-3.11V10.3a1.87 1.87 0 0 0-1.878-1.878zM0 15.475v2.17a3.117 3.117 0 0 0 3.11 3.11h13.836a1.87 1.87 0 0 0 1.878-1.879V16.29H1.878c-.73 0-1.398-.314-1.878-.814">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGoogletv(props) {
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