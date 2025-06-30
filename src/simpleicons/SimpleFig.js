import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Fig</title><path d="M4.543 0A4.543 4.543 0 0 0 0 4.543v14.914A4.543 4.543 0 0 0 4.543 24h14.914A4.543 4.543 0 0 0 24 19.457V4.543A4.543 4.543 0 0 0 19.457 0H4.543zm10.715 2.572h3.086a3.326 3.326 0 0 1 .656.065 3.28 3.28 0 0 1 .898.326c.093.05.181.106.268.164.087.058.172.12.252.186a3.264 3.264 0 0 1 .789.96c.05.093.098.188.139.286a3.21 3.21 0 0 1 .187.61 3.276 3.276 0 0 1 .067.66v12.343a3.276 3.276 0 0 1-.146.97 3.21 3.21 0 0 1-.108.3 3.259 3.259 0 0 1-.301.552 3.28 3.28 0 0 1-.627.694c-.08.066-.165.127-.252.185a3.242 3.242 0 0 1-.553.3 3.222 3.222 0 0 1-1.27.255h-3.085a3.326 3.326 0 0 1-.658-.065 3.242 3.242 0 0 1-2.344-1.922 3.222 3.222 0 0 1-.256-1.27V5.829a3.324 3.324 0 0 1 .393-1.555 3.221 3.221 0 0 1 1.04-1.146 3.241 3.241 0 0 1 .553-.3 3.26 3.26 0 0 1 1.272-.255z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFig(props) {
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