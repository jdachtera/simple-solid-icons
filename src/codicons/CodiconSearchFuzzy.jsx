import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M8 1.5C5.51472 1.5 3.5 3.51472 3.5 6C3.5 7.20114 3.9706 8.29237 4.73749 9.09937L1.04291 12.7939L1.75001 13.5011L5.5053 9.74577C6.2193 10.2222 7.07721 10.5 8 10.5C10.4853 10.5 12.5 8.48528 12.5 6C12.5 3.51472 10.4853 1.5 8 1.5ZM4.5 6C4.5 4.067 6.067 2.5 8 2.5C9.933 2.5 11.5 4.067 11.5 6C11.5 7.933 9.933 9.5 8 9.5C6.067 9.5 4.5 7.933 4.5 6Z"></path><path d="M8.99998 13.8546L6.85353 16.0011H6.14642L4.64642 14.5011L5.35353 13.7939L6.49998 14.9404L8.64642 12.7939H9.35353L11.5 14.9404L13.6464 12.7939H14.3535L16 14.4404V15.8546L14 13.8546L11.8535 16.0011H11.1464L8.99998 13.8546Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconSearchFuzzy(props) {
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