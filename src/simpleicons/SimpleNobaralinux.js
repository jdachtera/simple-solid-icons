import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Nobara Linux</title><path d="M23.808 11.808v8.281a3.542 3.542 0 0 1-3.542 3.527h-.46a3.543 3.543 0 0 1-3.083-3.513v-7.282l3.543-1.013-3.66-1.045a4.724 4.724 0 0 0-9.33 1.045v2.362a2.362 2.362 0 0 0 2.362 2.362 3.543 3.543 0 0 1 3.543 3.542V24a3.539 3.539 0 0 0-3.542-3.542 3.537 3.537 0 0 0-3.063 1.76 3.54 3.54 0 0 1-2.382 1.398h-.46A3.542 3.542 0 0 1 .192 20.09V3.543a3.542 3.542 0 0 1 6.323-2.194A11.756 11.756 0 0 1 12 0c6.521 0 11.808 5.287 11.808 11.808zm-9.446 0A2.359 2.359 0 0 1 12 14.17a2.362 2.362 0 1 1 2.362-2.362z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleNobaralinux(props) {
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