import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M4.7134 9.12811L4.46682 9.69379C4.28637 10.1079 3.71357 10.1079 3.53312 9.69379L3.28656 9.12811C2.84706 8.11947 2.05545 7.31641 1.06767 6.87708L0.308047 6.53922C-0.102682 6.35653 -0.102682 5.75881 0.308047 5.57612L1.0252 5.25714C2.03838 4.80651 2.84417 3.97373 3.27612 2.93083L3.52932 2.31953C3.70578 1.89349 4.29417 1.89349 4.47063 2.31953L4.72382 2.93083C5.15577 3.97373 5.96158 4.80651 6.9748 5.25714L7.69188 5.57612C8.10271 5.75881 8.10271 6.35653 7.69188 6.53922L6.93228 6.87708C5.94451 7.31641 5.15288 8.11947 4.7134 9.12811ZM1 19V12H3V18H15V6H10V4H16C16.5523 4 17 4.44772 17 5V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19ZM17 12.3587L21 15.1587V8.84131L17 11.6413V12.3587Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixVideoOnAiLine(props) {
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