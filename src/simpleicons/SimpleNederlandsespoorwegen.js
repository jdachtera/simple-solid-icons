import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Nederlandse Spoorwegen</title><path d="M10.494 11.812a2.602 2.602 0 0 0-1.835-.751H3.576L5.46 9.184h4.753a.757.757 0 0 1 .516.234l2.777 2.77a2.602 2.602 0 0 0 1.835.75h5.084l-1.884 1.878h-4.752a.757.757 0 0 1-.516-.235zm1.459 4.083a2.863 2.863 0 0 0 1.835.798h5.506L24 12l-4.706-4.694H16.66l3.764 3.755h-5.082a.99.99 0 0 1-.516-.188l-2.778-2.769a2.863 2.863 0 0 0-1.835-.798H4.706L0 12l4.706 4.693H7.34L3.577 12.94h5.082a.99.99 0 0 1 .516.187z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleNederlandsespoorwegen(props) {
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