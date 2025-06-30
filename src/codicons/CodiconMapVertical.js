import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M5.77711 2.49976L12.0979 2.49976L10.2229 5.49976L3.90211 5.49976L5.77711 2.49976ZM3.90211 6.49976L10.2229 6.49976L12.0979 9.49976L5.77711 9.49976L3.90211 6.49976ZM11.0896 5.99976L13.424 2.26475L13 1.49976L5.49999 1.49976L5.07599 1.73476L2.57599 5.73476L2.57599 6.26476L4.91036 9.99976L2.57599 13.7348L2.99999 14.4998L10.5 14.4998L10.924 14.2648L13.424 10.2648L13.424 9.73476L11.0896 5.99976ZM5.77711 10.4998L12.0979 10.4998L10.2229 13.4998L3.90211 13.4998L5.77711 10.4998Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconMapVertical(props) {
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