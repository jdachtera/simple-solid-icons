import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>AnkerMake</title><path d="m12.35 10.462 3.075 3.122c.187.187.187.42 0 .606l-3.122 3.123c-.186.186-.42.186-.606 0L8.575 14.19c-.187-.186-.187-.419 0-.606l3.169-3.122c.186-.186.419-.186.606 0Zm-1.585-1.584c.14.186.14.419-.047.605l-3.122 3.123c-.186.186-.419.186-.606 0l-1.724-1.724v12.675H0V.443h2.33l8.435 8.435ZM21.717.443H24v23.114h-5.266V10.882l-1.724 1.724c-.187.186-.42.186-.606 0l-3.122-3.123c-.187-.186-.187-.419 0-.605L21.717.443Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAnkermake(props) {
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