import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Wantedly</title><path d="M18.453 14.555c-.171-.111-.658-.764-2.006-3.982a9.192 9.192 0 0 0-.237-.526l-.274-.664-2.362-5.702H8.85l2.362 5.702 2.362 5.706 2.181 5.267a.196.196 0 0 0 .362 0l2.373-5.682a.1.1 0 0 0-.037-.119zm-8.85 0c-.171-.111-.658-.764-2.006-3.982a8.971 8.971 0 0 0-.236-.525l-.276-.665-2.36-5.702H0l2.362 5.702 2.362 5.706 2.181 5.267a.196.196 0 0 0 .362 0l2.374-5.682a.098.098 0 0 0-.038-.119ZM24 6.375a2.851 2.851 0 0 1-2.851 2.852 2.851 2.851 0 0 1-2.852-2.852 2.851 2.851 0 0 1 2.852-2.851A2.851 2.851 0 0 1 24 6.375Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleWantedly(props) {
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