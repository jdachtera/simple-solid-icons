import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M9.99994 11.999H4.99994V10.999H9.99994V11.999Z"></path><path d="M7.99994 5.99902H9.99994V6.99902H7.99994V9H6.99994V6.99902H4.99994V5.99902H6.99994V4H7.99994V5.99902Z"></path><path fill-rule=evenodd clip-rule=evenodd d="M10.7099 1.28906L13.7099 4.28906L13.9999 4.99902V13.999L12.9999 14.999H2.99994L1.99994 13.999V1.99902L2.99994 0.999023H9.99994L10.7099 1.28906ZM2.99994 13.999H12.9999V4.99902L9.99994 1.99902H2.99994V13.999Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconRequestChanges(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
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