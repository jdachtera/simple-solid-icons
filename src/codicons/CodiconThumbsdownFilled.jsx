import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M14.9999 7.5V2.5C14.9999 1.673 14.3269 1 13.4999 1H11.9999V9H13.4999C14.3269 9 14.9999 8.327 14.9999 7.5ZM1.42894 9.185C1.80994 9.703 2.39794 10 3.04094 10H6.47394L6.00994 12.32C5.87794 12.981 6.04694 13.658 6.47394 14.18C6.90094 14.701 7.53294 15 8.20594 15C8.64994 15 9.04494 14.702 9.15694 14.307L9.62094 13.021C9.98394 12.016 10.4489 11.056 10.9989 10.145V1H4.60194C3.72194 1 2.95494 1.564 2.69294 2.404L1.13094 7.404C0.938937 8.018 1.04794 8.667 1.42794 9.185H1.42894Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconThumbsdownFilled(props) {
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