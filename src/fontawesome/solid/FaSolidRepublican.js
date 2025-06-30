import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M0 192C0 103.6 71.6 32 160 32l224 0c88.4 0 160 71.6 160 160l0 64L0 256l0-64zm415.9-64c-2.4 0-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L466 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4zm-138.3 3.4c-1.1-2.1-3.3-3.4-5.7-3.4s-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L322 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6zM127.9 128c-2.4 0-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L178 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4zm.1 160l192 0 96 0 32 0 64 0 32 0 0 32 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-48-32 0 0 32 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64-192 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64 0-96 128 0z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidRepublican(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 640 512',
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