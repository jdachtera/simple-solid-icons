import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M12 1.5C15.0376 1.5 17.5 3.96243 17.5 7C17.5 8.77579 16.6584 10.355 15.3523 11.3606C17.2389 12.4091 18.5 14.3186 18.5 16.5C18.5 19.8137 15.5899 22.5 12 22.5C8.41015 22.5 5.5 19.8137 5.5 16.5C5.5 14.3186 6.7611 12.4091 8.64703 11.3589C7.34158 10.355 6.5 8.77579 6.5 7C6.5 3.96243 8.96243 1.5 12 1.5ZM12 12.5C9.48055 12.5 7.5 14.3282 7.5 16.5C7.5 18.6718 9.48055 20.5 12 20.5C14.5194 20.5 16.5 18.6718 16.5 16.5C16.5 14.3282 14.5194 12.5 12 12.5ZM12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixNumber8(props) {
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