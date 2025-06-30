import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M530.01 112.67c43.67-.67 87-.34 130.33-.67 2.67 51 21 103 58.33 139 37.33 37 90 54 141.33 59.66V445c-48-1.67-96.33-11.67-140-32.34-19-8.66-36.66-19.66-54-31-.33 97.33.34 194.67-.66 291.67-2.67 46.66-18 93-45 131.33-43.66 64-119.32 105.66-196.99 107-47.66 2.66-95.33-10.34-136-34.34C220.04 837.66 172.7 765 165.7 687c-.67-16.66-1-33.33-.34-49.66 6-63.34 37.33-124 86-165.34 55.33-48 132.66-71 204.99-57.33.67 49.34-1.33 98.67-1.33 148-33-10.67-71.67-7.67-100.67 12.33-21 13.67-37 34.67-45.33 58.34-7 17-5 35.66-4.66 53.66 8 54.67 60.66 100.67 116.66 95.67 37.33-.34 73-22 92.33-53.67 6.33-11 13.33-22.33 13.66-35.33 3.34-59.67 2-119 2.34-178.66.33-134.34-.34-268.33.66-402.33">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: antdesign | License: MIT (<https://github.com/ant-design/ant-design-icons/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function AntdOutlineTikTok(props) {
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