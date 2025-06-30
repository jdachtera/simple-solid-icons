import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M224,232a32,32,0,0,1,64,0 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></path><line x1=448 y1=200 x2=464 y2=200 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><line x1=64 y1=200 x2=48 y2=200 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><path d=M64,200c0,96,16,128,80,128s80-32,80-128c0,0-16-16-80-16S64,200,64,200Z style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></path><path d=M448,200c0,96-16,128-80,128s-80-32-80-128c0,0,16-16,80-16S448,200,448,200Z style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonGlassesOutline(props) {
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