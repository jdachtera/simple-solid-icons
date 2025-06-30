import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Void Linux</title><path d="M15.818 12a3.82 3.82 0 0 1-3.82 3.82A3.82 3.82 0 0 1 8.178 12a3.82 3.82 0 0 1 3.82-3.82 3.82 3.82 0 0 1 3.82 3.82Zm3.179 9.73-2.726-2.725A8.212 8.212 0 0 1 12 20.212 8.212 8.212 0 0 1 3.788 12a8.212 8.212 0 0 1 1.209-4.269l-2.73-2.73A12 12 0 0 0 0 12c0 6.627 5.373 12 12 12a12 12 0 0 0 6.997-2.27zM12 0a12 12 0 0 0-6.997 2.27L7.73 4.994A8.212 8.212 0 0 1 12 3.788 8.212 8.212 0 0 1 20.212 12a8.212 8.212 0 0 1-1.209 4.269l2.73 2.73A12 12 0 0 0 24 12c0-6.627-5.373-12-12-12Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleVoidlinux(props) {
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