import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M320 33.8L320 160 48.5 160C100.2 82.8 188.1 32 288 32c10.8 0 21.5 .6 32 1.8zM352 160l0-120.9C424.9 55.7 487.2 99.8 527.5 160L352 160zM29.9 192L96 192l0 128L0 320c0-46 10.8-89.4 29.9-128zM192 320l-64 0 0-128 320 0 0 128-64 0 0 32 192 0 0 80c0 26.5-21.5 48-48 48l-176 0 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128L48 480c-26.5 0-48-21.5-48-48l0-80 192 0 0-32zm288 0l0-128 66.1 0c19.2 38.6 29.9 82 29.9 128l-96 0z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaSolidIgloo(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 576 512',
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