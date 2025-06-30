import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M8.00024 9C8.55253 9 9.00024 8.55228 9.00024 8C9.00024 7.44772 8.55253 7 8.00024 7C7.44796 7 7.00024 7.44772 7.00024 8C7.00024 8.55228 7.44796 9 8.00024 9Z"></path><path d="M12.0002 8C12.0002 10.2091 10.2094 12 8.00024 12C5.79111 12 4.00024 10.2091 4.00024 8C4.00024 5.79086 5.79111 4 8.00024 4C10.2094 4 12.0002 5.79086 12.0002 8ZM11.0002 8C11.0002 6.34315 9.6571 5 8.00024 5C6.34339 5 5.00024 6.34315 5.00024 8C5.00024 9.65685 6.34339 11 8.00024 11C9.6571 11 11.0002 9.65685 11.0002 8Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function CodiconRecordSmall(props) {
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