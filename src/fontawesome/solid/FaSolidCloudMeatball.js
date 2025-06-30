import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M0 224c0 53 43 96 96 96l44.7 0c9.5-23.5 32.5-40 59.3-40c2 0 3.9 .1 5.8 .3C217.6 265.5 235.7 256 256 256s38.4 9.5 50.2 24.3c1.9-.2 3.9-.3 5.8-.3c26.9 0 49.9 16.5 59.3 40l44.7 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 1 .1 2.1 .1 3.1c-.7-.8-1.4-1.6-2.1-2.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3c.7 .7 1.5 1.4 2.3 2.1c-1-.1-2.1-.1-3.1-.1c-17.7 0-32 14.3-32 32s14.3 32 32 32c1 0 2.1-.1 3.1-.1c-.8 .7-1.6 1.3-2.3 2.1c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0c.7-.7 1.4-1.5 2.1-2.3c-.1 1-.1 2.1-.1 3.1c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1-.1-2.1-.1-3.1c.7 .8 1.3 1.6 2.1 2.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3c-.7-.7-1.5-1.4-2.3-2.1c1 .1 2.1 .1 3.1 .1c17.7 0 32-14.3 32-32s-14.3-32-32-32c-1 0-2.1 .1-3.1 .1c.8-.7 1.6-1.3 2.3-2.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-.7 .7-1.4 1.5-2.1 2.3c.1-1 .1-2.1 .1-3.1zM48 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm416 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidCloudMeatball(props) {
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