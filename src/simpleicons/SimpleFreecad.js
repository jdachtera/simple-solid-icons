import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>FreeCAD</title><path d="M6 0h16v7.996a.7.7 0 0 1-.288.566l-2.173 1.58a.7.7 0 0 0-.289.565v.586c0 .224.107.434.289.566l1.895 1.377a.7.7 0 0 1 .254.783l-.649 1.997a.7.7 0 0 1-.665.484H18.03a.7.7 0 0 0-.566.288l-.344.474a.7.7 0 0 0-.1.627l.724 2.229a.7.7 0 0 1-.254.782l-1.699 1.234a.7.7 0 0 1-.823 0l-1.895-1.377a.7.7 0 0 0-.628-.099l-.556.18a.7.7 0 0 0-.45.45l-.724 2.228a.7.7 0 0 1-.665.484H2V4zm12 8V4H6v16h4v-5h4v-4h-4V8z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleFreecad(props) {
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