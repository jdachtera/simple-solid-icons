import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:44px></path><path d=M256,48c-58.07,0-112.67,93.13-112.67,208S197.93,464,256,464s112.67-93.13,112.67-208S314.07,48,256,48Z style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:44px></path><path d=M117.33,121.33c38.24,27.15,86.38,43.34,138.67,43.34s100.43-16.19,138.67-43.34 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px></path><path d=M394.67,390.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43,16.19-138.67,43.34 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px></path><line x1=256 y1=48 x2=256 y2=464 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:44px></line><line x1=464 y1=256 x2=48 y2=256 style=fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:44px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonGlobeSharp(props) {
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