import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Keeper</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.365 1.788 1.854.472v2.597l2.073-1.704 1.537 1.135-3.949 3.247-1.515-.008zm-9.067 15.54L2.445 15.75V8.7L4.298 7zm3.631 2.22L6.076 21.16V3l1.853 1.614zm9.363 1.555-2.073-1.705v2.597l-1.854.473v-5.74l1.515-.007 3.95 3.246zm2.733-2.473-4.604-3.674h-3.826v7.512H9.742v-9.365h6.329l5.11 4.078zm2.62-8.329-2.059 1.7 2.059 1.698-1.181 1.431L17.67 12l3.793-3.13zm-6.574.6H9.742V1.534h1.853v7.512h3.826l4.604-3.674 1.156 1.449z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleKeeper(props) {
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