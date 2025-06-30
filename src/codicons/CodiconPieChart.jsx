import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd clip-rule=evenodd d="M10 6H13.9C13.5023 4.04087 11.9591 2.4977 10 2.10002V6ZM10 1.08296C12.5125 1.50448 14.4955 3.4875 14.917 6C14.9716 6.32521 15 6.65929 15 7H9V1C9.34071 1 9.67479 1.0284 10 1.08296ZM7 8.00003L8 9.00003H12.9C12.4367 11.2823 10.4189 13 8 13C5.23858 13 3 10.7614 3 8C3 5.58104 4.71776 3.56329 7 3.10002V8.00003ZM8 14C10.973 14 13.4409 11.8377 13.917 9.00003C13.9716 8.67482 14 8.34074 14 8.00003H8V2C7.65929 2 7.32521 2.0284 7 2.08296C4.16229 2.55904 2 5.027 2 8C2 11.3137 4.68629 14 8 14Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconPieChart(props) {
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