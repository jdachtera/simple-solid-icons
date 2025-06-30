import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M3 1V1.5C3 1.96954 3.27449 2.20587 3.8 2.6L3.83977 2.62978C4.31392 2.98457 5 3.49793 5 4.5V5H4V4.5C4 4.03046 3.72551 3.79413 3.2 3.4L3.16023 3.37022C2.68608 3.01543 2 2.50207 2 1.5V1H3Z"></path><path d="M6 1V1.5C6 1.96954 6.27449 2.20587 6.8 2.6L6.83977 2.62978C7.31392 2.98457 8 3.49793 8 4.5V5H7V4.5C7 4.03046 6.72551 3.79413 6.2 3.4L6.16023 3.37022C5.68608 3.01543 5 2.50207 5 1.5V1H6Z"></path><path d="M9 1V1.5C9 1.96954 9.27449 2.20587 9.8 2.6L9.83977 2.62978C10.3139 2.98457 11 3.49793 11 4.5V5H10V4.5C10 4.03046 9.72551 3.79413 9.2 3.4L9.16023 3.37022C8.68608 3.01543 8 2.50207 8 1.5V1H9Z"></path><path fill-rule=evenodd clip-rule=evenodd d="M2 7L3 6H13.5C14.8807 6 16 7.11929 16 8.5C16 9.88071 14.8807 11 13.5 11H12.874C12.4299 12.7252 10.8638 14 9 14H6C3.79086 14 2 12.2091 2 10V7ZM12 10V7H3V10C3 11.6569 4.34315 13 6 13H9C10.6569 13 12 11.6569 12 10ZM13 7V10H13.5C14.3284 10 15 9.32843 15 8.5C15 7.67157 14.3284 7 13.5 7H13Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconCoffee(props) {
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