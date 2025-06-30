import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M248 752h72V264h-72z"></path><path d="M740 863c61.86 0 112-50.14 112-112 0-48.33-30.6-89.5-73.5-105.2l-.01-113.04a50.73 50.73 0 00-34.95-48.2l-434.9-142.41-22.4 68.42 420.25 137.61.01 95.92C661 658.34 628 700.8 628 751c0 61.86 50.14 112 112 112m-456 61c61.86 0 112-50.14 112-112s-50.14-112-112-112-112 50.14-112 112 50.14 112 112 112m456-125a48 48 0 110-96 48 48 0 010 96m-456 61a48 48 0 110-96 48 48 0 010 96m0-536c61.86 0 112-50.14 112-112s-50.14-112-112-112-112 50.14-112 112 50.14 112 112 112m0-64a48 48 0 110-96 48 48 0 010 96">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: antdesign | License: MIT (<https://github.com/ant-design/ant-design-icons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function AntdOutlineMerge(props) {
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