import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>BEM</title><path d="M0 5.163h5.61v1.65H0Zm0-3.065h5.61v1.65H0Zm10.067 6.106H0v1.65h9.69c1.06 0 3.536.024 4.455 1.51v-.92c-.448-1.462-1.768-2.24-4.078-2.24Zm.023 3.065H0v1.65h9.69c2.357 0 3.842.095 4.455.425v-.731c-.471-1.155-2.451-1.344-4.055-1.344Zm-.023 7.78H0V17.4h9.69c1.06 0 3.536-.024 4.455-1.509v.92c-.448 1.461-1.768 2.24-4.078 2.24zm.023-3.065H0v-1.65h9.69c2.357 0 3.842-.094 4.455-.424v.73c-.471 1.156-2.451 1.344-4.055 1.344zm6.507 5.918H24v-1.014h-7.19c-.637 0-2.146-.023-2.688-.896v.566c.26.872 1.06 1.344 2.475 1.344zm-.023-1.863h7.403v-1.013H16.81c-1.439 0-2.334-.047-2.688-.26v.448c.283.708 1.485.825 2.452.825z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleBem(props) {
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