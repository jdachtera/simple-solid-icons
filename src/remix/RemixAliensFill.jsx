import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M12 2C16.6944 2 20.5 5.80558 20.5 10.5C20.5 17 15 22.5 12 22.5C9 22.5 3.5 17 3.5 10.5C3.5 5.80558 7.30558 2 12 2ZM17.5 12C15.0147 12 13 14.0147 13 16.5C13 16.6603 13.0084 16.8186 13.0252 16.9752C13.1812 16.9916 13.3396 17 13.5 17C15.9853 17 18 14.9853 18 12.5C18 12.3396 17.9916 12.1812 17.9746 12.0247C17.8186 12.0084 17.6603 12 17.5 12ZM6.5 12C6.33963 12 6.18121 12.0084 6.02475 12.0252C6.00839 12.1812 6 12.3396 6 12.5C6 14.9853 8.01472 17 10.5 17C10.6603 17 10.8186 16.9916 10.9753 16.9746C10.9916 16.8186 11 16.6603 11 16.5C11 14.0147 8.98528 12 6.5 12Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixAliensFill(props) {
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