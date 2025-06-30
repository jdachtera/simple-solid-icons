import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>UKCA</title><path d="M7.138 11.001H3.852C1.728 11.001 0 9.296 0 7.201V.011h2.498v7.155c0 .737.622 1.336 1.388 1.336h3.218c.766 0 1.388-.599 1.388-1.336V.011h2.498v7.19c0 2.095-1.728 3.8-3.852 3.8M24 .011h-3.23l-5.285 4.16V.011h-2.498V11h2.498V6.814l5.284 4.187h3.217l-6.952-5.508ZM10.99 23.99H3.8c-2.095 0-3.8-1.761-3.8-3.885v-3.22C0 14.762 1.705 13 3.8 13h7.19v2.498H3.834c-.737 0-1.336.622-1.336 1.388v3.219c0 .765.6 1.387 1.336 1.387h7.156zm4.495-4.995v-2.16c0-.738.622-1.337 1.387-1.337h3.22c.765 0 1.387.6 1.387 1.336v2.16zM20.125 13H16.84c-2.124 0-3.852 1.705-3.852 3.8v7.19h2.498v-2.498h5.994v2.497h2.498V16.8c0-2.094-1.728-3.799-3.852-3.799">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleUkca(props) {
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