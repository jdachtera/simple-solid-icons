import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M17.37 160.41L7 352h43.91l5.59-79.83L84.43 352h44.71l25.54-77.43 4.79 77.43H205l-12.79-191.59H146.7L106 277.74 63.67 160.41zm281 0h-47.9V352h47.9s95 .8 94.2-95.79c-.78-94.21-94.18-95.78-94.18-95.78zm-1.2 146.46V204.78s46 4.27 46.8 50.57-46.78 51.54-46.78 51.54zm238.29-74.24a56.16 56.16 0 0 0 8-38.31c-5.34-35.76-55.08-34.32-55.08-34.32h-51.9v191.58H482s87 4.79 87-63.85c0-43.14-33.52-55.08-33.52-55.08zm-51.9-31.94s13.57-1.59 16 9.59c1.43 6.66-4 12-4 12h-12v-21.57zm-.1 109.46l.1-24.92V267h.08s41.58-4.73 41.19 22.43c-.33 25.65-41.35 20.74-41.35 20.74z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: fontawesome | License: CC BY 4.0 (<https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt>)
import { mergeProps } from 'solid-js';
export function FaBrandsMdb(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 576 512',
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