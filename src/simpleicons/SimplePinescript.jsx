import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Pine Script</title><path d="M3.785 16.14.124 21.287c-.311.437 0 1.044.536 1.044h22.681c.535 0 .846-.608.536-1.045l-4.2-5.927-1.979 1.161c-.037 1.063-.907 1.913-1.976 1.913-1.092 0-1.977-.887-1.977-1.982 0-.055.003-.11.007-.165l-3.173-2.328c-.341.278-.775.445-1.249.445-.56 0-1.065-.234-1.425-.609l-4.12 2.346Zm7.693-14.194L3.813 12.732c-.222.314-.132.751.197.95l.691.417 2.66-1.515a1.747 1.747 0 0 1-.007-.163c0-1.095.885-1.982 1.977-1.982 1.091 0 1.976.887 1.976 1.982 0 .138-.014.273-.041.403l3.047 2.237c.359-.366.858-.592 1.409-.592.634 0 1.198.299 1.56.764l2.831-1.66c.219-.222.258-.581.068-.849L12.553 1.948c-.262-.371-.812-.373-1.075-.002Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePinescript(props) {
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