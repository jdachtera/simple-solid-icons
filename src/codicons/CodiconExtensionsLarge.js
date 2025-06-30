import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M22.281 6.96899L17.031 1.71899H15.9705L12.0015 5.68799V3.74849L11.2515 2.99849H2.25L1.5 3.74849V21.7485L2.25 22.4985H20.25L21 21.7485V12.7485L20.25 11.9985H18.3105L22.2795 8.02949V6.96899H22.281ZM3 4.49999H10.5V12H3V4.49999ZM3 13.5H10.5V21H3V13.5ZM19.5 21H12V13.5H19.5V21ZM12 12V9.31049L14.6895 12H12ZM16.5 11.6895L12.3105 7.49999L16.5 3.31049L20.6895 7.49999L16.5 11.6895Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconExtensionsLarge(props) {
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