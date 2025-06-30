import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>KNIME</title><path d="m10.445 21.393 11.54-.775.451.775zM7.56 11.113l-5.092 10.28h-.904Zm10.427 2.652-6.43-9.505.452-.775zm2.57 5.216.627.896-10.652.707zM4.655 20.976l-1.143.09 4.709-9.488Zm6.173-14.667.476-.998 5.984 8.782zm8.272 11.055.847 1.015-8.685 1.413zM6.76 20.532l-1.32.224 3.11-8.162Zm3.406-12.189.472-1.207 5.558 6.732Zm7.403 7.54 1.13 1.016-6.378 1.98zm-8.759 4.08-1.46.448 1.46-6.44zm.8-9.539.363-1.48 4.868 4.477zm-.348 9.402v-7.851l.244-1.085 6.864 3.926.834.758L10.34 19.5zM12.01 1.694 0 22.306h24z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleKnime(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
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