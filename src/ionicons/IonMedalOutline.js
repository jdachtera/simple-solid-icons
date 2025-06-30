import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><circle cx=256 cy=352 r=112 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></circle><circle cx=256 cy=352 r=48 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></circle><path d=M147,323,41.84,159.32a32,32,0,0,1-1.7-31.61l31-62A32,32,0,0,1,99.78,48H412.22a32,32,0,0,1,28.62,17.69l31,62a32,32,0,0,1-1.7,31.61L365,323 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></path><line x1=371 y1=144 x2=37 y2=144 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><line x1=428.74 y1=52.6 x2=305 y2=250 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px></line><line x1=140.55 y1=144 x2=207 y2=250 style=fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonMedalOutline(props) {
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