import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>FreeTube</title><path d="M4.7066 0c.9 0 1.6294.7295 1.6294 1.6294V24H4.0993a4.0988 4.0988 0 0 1-2.8986-1.2007A4.0988 4.0988 0 0 1 0 19.9007V1.6294C0 .7294.7295 0 1.6294 0ZM24 0v1.9409a4.3951 4.3951 0 0 1-4.3951 4.3951H9.0053c-.891 0-1.6133-.7223-1.6133-1.6133V1.6133C7.392.7223 8.1143 0 9.0053 0Zm-6.7817 11.734a.618.618 0 0 1 0 1.108l-8.9022 4.412a.64.64 0 0 1-.9241-.5734V7.8954a.64.64 0 0 1 .9241-.5734Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFreetube(props) {
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