import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd clip-rule=evenodd d="M8.88415 8.32009L6.38415 11.3201L5.64648 11.3535L4.14648 9.85355L4.85359 9.14644L5.96644 10.2593L8.11593 7.6799L8.88415 8.32009Z"></path><path d="M11.9803 9.96948C12.6105 9.33654 13 8.46376 13 7.5C13 5.567 11.433 4 9.5 4C9.03097 4 8.58349 4.09226 8.17472 4.25962C7.69756 4.10726 7.19209 4.01826 6.66821 4.00252C7.44155 3.37561 8.42691 3 9.5 3C11.9853 3 14 5.01472 14 7.5C14 9.2103 13.0459 10.6978 11.6408 11.4591C11.8197 10.99 11.9362 10.4901 11.9803 9.96948Z"></path><path fill-rule=evenodd clip-rule=evenodd d="M6.5 13C4.567 13 3 11.433 3 9.5C3 7.567 4.567 6 6.5 6C8.433 6 10 7.567 10 9.5C10 11.433 8.433 13 6.5 13ZM6.5 14C8.98528 14 11 11.9853 11 9.5C11 7.01472 8.98528 5 6.5 5C4.01472 5 2 7.01472 2 9.5C2 11.9853 4.01472 14 6.5 14Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconCoverage(props) {
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