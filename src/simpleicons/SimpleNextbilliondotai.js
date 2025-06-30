import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>NextBillion.ai</title><path d="M22.399 13.3694a6.3067 6.3067 0 0 0-.5655-.567 6.3754 6.3754 0 0 0-4.2337-1.5994h-4.7989V6.4007a6.3783 6.3783 0 0 0-1.5993-4.2338 6.1066 6.1066 0 0 0-.567-.5641A6.3973 6.3973 0 0 0 .002 6.4016v4.7989a1.5994 1.5994 0 0 0 1.5993 1.5993h9.5959v4.7989a6.3696 6.3696 0 0 0 .855 3.1985l.0842.1453a6.3445 6.3445 0 0 0 .6615.8942 6.6637 6.6637 0 0 0 .5641.5641 6.4689 6.4689 0 0 0 .8913.6586l.1453.0858a6.4074 6.4074 0 0 0 7.4324-.7444 6.6963 6.6963 0 0 0 .5655-.5655 6.3973 6.3973 0 0 0 0-8.4677zm-11.198-2.1708H1.6052v-4.799a4.7989 4.7989 0 0 1 9.5958 0zm6.3965 11.1951a4.7703 4.7703 0 0 1-3.1986-1.2243 4.1977 4.1977 0 0 1-.378-.3766 4.782 4.782 0 0 1-1.2211-3.1985v-4.7964h4.7988a4.7989 4.7989 0 0 1 0 9.5958z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleNextbilliondotai(props) {
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