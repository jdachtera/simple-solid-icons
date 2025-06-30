import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 5C8.13401 5 5 8.13401 5 12C5 13.8525 5.71957 15.5368 6.89445 16.7889L7.05025 16.9497L8.46447 15.5355C7.55964 14.6307 7 13.3807 7 12C7 9.23858 9.23858 7 12 7C12.448 7 12.8822 7.05892 13.2954 7.16944L14.8579 5.60806C13.9852 5.21731 13.018 5 12 5ZM18.3924 9.14312L16.8306 10.7046C16.9411 11.1178 17 11.552 17 12C17 13.3807 16.4404 14.6307 15.5355 15.5355L16.9497 16.9497C18.2165 15.683 19 13.933 19 12C19 10.9824 18.7829 10.0155 18.3924 9.14312ZM16.2426 6.34315L12.517 10.0675C12.3521 10.0235 12.1788 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 11.8212 13.9765 11.6479 13.9325 11.483L17.6569 7.75736L16.2426 6.34315Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixDashboard2Fill(props) {
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