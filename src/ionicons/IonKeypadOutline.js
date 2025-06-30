import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><circle cx=256 cy=448 r=32 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></circle><circle cx=256 cy=320 r=32 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></circle><path d=M288,192a32,32,0,1,1-32-32A32,32,0,0,1,288,192Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></path><circle cx=256 cy=64 r=32 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></circle><circle cx=384 cy=320 r=32 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></circle><circle cx=384 cy=192 r=32 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></circle><circle cx=384 cy=64 r=32 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></circle><circle cx=128 cy=320 r=32 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></circle><circle cx=128 cy=192 r=32 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></circle><circle cx=128 cy=64 r=32 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonKeypadOutline(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
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