import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Hotels.com</title><path d="M19.064 0H4.936a4.937 4.937 0 0 0-4.93 4.93V19.06A4.94 4.94 0 0 0 4.935 24h14.128a4.926 4.926 0 0 0 4.93-4.941V4.93A4.93 4.93 0 0 0 19.065 0zM8.55 10.63v2.329a.32.32 0 0 1-.337.337H5.884a.32.32 0 0 1-.337-.337V10.63c0-.2.137-.337.337-.337h2.34c.2 0 .336.137.336.337h-.01zm5.162 7.491a.32.32 0 0 1-.337.337h-2.328a.32.32 0 0 1-.337-.337v-2.328c0-.2.136-.337.337-.337h2.328c.19 0 .337.136.337.337v2.328zm0-5.162a.32.32 0 0 1-.337.337h-2.328a.32.32 0 0 1-.337-.337V10.63c0-.2.136-.337.337-.337h2.328c.2 0 .337.137.337.337v2.329zm5.974 4.372a.654.654 0 0 1-.22.516l-2.308 2.297c-.18.168-.432.052-.432-.2V7.28H4.062c-.253 0-.369-.264-.2-.432L6.169 4.55c.137-.147.274-.232.506-.232h11.473c.854 0 1.538.685 1.538 1.539V17.33z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleHotelsdotcom(props) {
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