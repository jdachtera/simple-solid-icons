import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M322,416c0,35.35-20.65,64-56,64H134c-35.35,0-56-28.65-56-64 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></path><path d=M336,336c17.67,0,32,17.91,32,40h0c0,22.09-14.33,40-32,40H64c-17.67,0-32-17.91-32-40h0c0-22.09,14.33-40,32-40 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></path><path d=M344,336H179.31a8,8,0,0,0-5.65,2.34l-26.83,26.83a4,4,0,0,1-5.66,0l-26.83-26.83a8,8,0,0,0-5.65-2.34H56a24,24,0,0,1-24-24h0a24,24,0,0,1,24-24H344a24,24,0,0,1,24,24h0A24,24,0,0,1,344,336Z style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></path><path d=M64,276v-.22c0-55,45-83.78,100-83.78h72c55,0,100,29,100,84v-.22 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></path><line x1=241 y1=112 x2=248.44 y2=175.97 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></line><path d=M256,480H395.31a32,32,0,0,0,31.91-29.61L463,112 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px></path><polyline points="368 112 384 48 431 32"style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></polyline><line x1=224 y1=112 x2=480 y2=112 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonFastFoodOutline(props) {
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