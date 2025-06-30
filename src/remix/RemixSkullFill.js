import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M18 18V21C18 21.5523 17.5523 22 17 22H7C6.44772 22 6 21.5523 6 21V18H3C2.44772 18 2 17.5523 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V17C22 17.5523 21.5523 18 21 18H18ZM7.5 14C8.32843 14 9 13.3284 9 12.5C9 11.6716 8.32843 11 7.5 11C6.67157 11 6 11.6716 6 12.5C6 13.3284 6.67157 14 7.5 14ZM16.5 14C17.3284 14 18 13.3284 18 12.5C18 11.6716 17.3284 11 16.5 11C15.6716 11 15 11.6716 15 12.5C15 13.3284 15.6716 14 16.5 14Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixSkullFill(props) {
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