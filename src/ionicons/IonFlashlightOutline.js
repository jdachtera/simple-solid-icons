import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M456.64,162.86,349.12,55.36c-13.15-13.14-28.68-7.17-41.82,6l-11.95,12c-26.13,26.13-27.62,58.38-29.42,83.31-.89,12.24-9.78,27.55-18.51,36.28L58.58,381.67C42.23,398,45.89,421.09,62.31,437.51l12.17,12.17c16.36,16.35,39.43,20.16,55.86,3.74l188.83-188.8c8.74-8.74,24-17.55,36.29-18.52,24.87-1.86,58.62-4.85,83.26-29.49l11.94-11.94C463.81,191.53,469.78,176,456.64,162.86Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:32px></path><circle cx=224.68 cy=287.28 r=20></circle><line x1=289 y1=81 x2=431 y2=223 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonFlashlightOutline(props) {
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