import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd clip-rule=evenodd d="M2.5 5L2 4.5v-3l.5-.5h11l.5.5v3l-.5.5h-11zM10 2H9v1H8V2H7v1H6V2H5v1H4V2H3v2h10V2h-2v1h-1V2zm-7.5 8L2 9.5v-3l.5-.5h11l.5.5v3l-.5.5h-11zM6 7H5v1H4V7H3v2h10V7h-2v1h-1V7H9v1H8V7H7v1H6V7zm7.5 8l.5-.5v-3l-.5-.5h-11l-.5.5v3l.5.5h11zM3 14v-2h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h2v2H3z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconServer(props) {
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