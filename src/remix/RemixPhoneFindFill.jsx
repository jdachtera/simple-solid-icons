import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M18 2C18.5523 2 19 2.44772 19 3L19.0009 11.5286C17.9393 10.578 16.5371 10 15 10C11.6863 10 9 12.6863 9 16C9 19.2384 11.76 22 15 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM15 12C17.2091 12 19 13.7909 19 16C19 16.7418 18.7981 17.4365 18.4462 18.032L20.6569 20.2426L19.2426 21.6569L17.032 19.4462C16.4365 19.7981 15.7418 20 15 20C12.7909 20 11 18.2091 11 16C11 13.7909 12.7909 12 15 12ZM15 14C13.8954 14 13 14.8954 13 16C13 17.1046 13.8954 18 15 18C16.1046 18 17 17.1046 17 16C17 14.8954 16.1046 14 15 14Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixPhoneFindFill(props) {
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