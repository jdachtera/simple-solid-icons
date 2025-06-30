import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M176 56c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm24 48l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm-24-96l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm-24-96l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24zm-24-96l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidBowlRice(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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