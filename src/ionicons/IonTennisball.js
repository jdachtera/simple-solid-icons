import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M448,256a192.55,192.55,0,0,0,32-2.68A224,224,0,0,0,258.68,32,192.55,192.55,0,0,0,256,64C256,169.87,342.13,256,448,256Z></path><path d=M253.35,480c.94-5.67,1.65-11.4,2.09-17.18.37-4.88.56-9.86.56-14.79,0-105.87-86.13-192-192-192a192.55,192.55,0,0,0-32,2.68A224,224,0,0,0,253.35,480Z></path><path d=M289.61,222.39A222.53,222.53,0,0,1,224,64a226.07,226.07,0,0,1,2-30A224.1,224.1,0,0,0,34,226a226.07,226.07,0,0,1,30-2,222.53,222.53,0,0,1,158.39,65.61A222.53,222.53,0,0,1,288,448c0,5.74-.22,11.53-.65,17.22q-.5,6.42-1.36,12.79A224.12,224.12,0,0,0,478,286a226.07,226.07,0,0,1-30,2A222.53,222.53,0,0,1,289.61,222.39Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonTennisball(props) {
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