import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>LibreOffice Base</title><path d="M17 13h-1v-1h1v1zm0 1h-1v1h1v-1zm0 2h-1v1h1v-1zm-.6-16H15l7 7V0h-5.6zM13 0l9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8zM6 11c0 .552 1.343 1 3 1s3-.448 3-1v-1c0-.552-1.343-1-3-1s-3 .448-3 1v1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1v1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1v1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1v1zm12-6h-5v7h5v-7zm-3 1h-1v1h1v-1zm0 4h-1v1h1v-1zm0-2h-1v1h1v-1z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLibreofficebase(props) {
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