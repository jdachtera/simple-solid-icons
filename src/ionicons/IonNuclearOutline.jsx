import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><circle cx=256 cy=256 r=192 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></circle><circle cx=256 cy=256 r=64 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></circle><line x1=224 y1=192 x2=171 y2=85 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><line x1=288 y1=192 x2=341 y2=85 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><line x1=327.55 y1=255.81 x2=446.96 y2=255.94 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><line x1=299.09 y1=313.13 x2=371.34 y2=408.19 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><line x1=184.45 y1=255.81 x2=65.04 y2=255.94 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><line x1=212.91 y1=313.13 x2=140.66 y2=408.19 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonNuclearOutline(props) {
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