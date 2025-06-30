import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Cairo Metro</title><path d="M12.397 4.14h.882v.881h-.882zm-1.628 0h.883v.881h-.883zm4.915 1.055v3.402h-1.386V5.195h-.84v1.763h-2.983V5.196h-.84v3.402H8.543v.84h1.911V7.82h2.983v1.617h5.44V5.195zm2.352 3.395h-1.512V6.028h1.512zM5.173 5.195v2.604h2.353v.805H5.173v.833h3.193V5.195zm2.339 1.757H5.999v-.924h1.513zm-2.64 12.177V9.726h4.175L12 12.68l2.954-2.953h4.176v9.403h-4.176v-3.442L12 18.754l-2.952-3.048v3.424zM12 0L8.485 3.515h-4.97v4.97L0 12l3.515 3.515v4.97h4.97L12 24l3.515-3.515h4.97v-4.97L24 12l-3.515-3.515v-4.97h-4.97zm0 1.708l3.014 3.015h4.263v4.263L22.292 12l-3.015 3.014v4.263h-4.263L12 22.292l-3.014-3.015H4.723v-4.263L1.708 12l3.015-3.014V4.723h4.263Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleCairometro(props) {
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