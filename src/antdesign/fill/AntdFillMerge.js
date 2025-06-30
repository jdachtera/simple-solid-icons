import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M284 924c61.86 0 112-50.14 112-112 0-49.26-31.8-91.1-76-106.09V421.63l386.49 126.55.01 95.92C661 658.34 628 700.8 628 751c0 61.86 50.14 112 112 112s112-50.14 112-112c0-48.33-30.6-89.5-73.5-105.2l-.01-113.04a50.73 50.73 0 00-34.95-48.2L320 345.85V318.1c43.64-14.8 75.2-55.78 75.99-104.24L396 212c0-61.86-50.14-112-112-112s-112 50.14-112 112c0 49.26 31.8 91.1 76 106.09V705.9c-44.2 15-76 56.83-76 106.09 0 61.86 50.14 112 112 112">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: antdesign | License: MIT (<https://github.com/ant-design/ant-design-icons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function AntdFillMerge(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '64 64 896 896',
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