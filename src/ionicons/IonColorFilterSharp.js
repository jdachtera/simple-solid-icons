import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d=M256,185a167.85,167.85,0,0,1,134.9-18.28C382.36,99.83,325.12,48,256,48S129.64,99.83,121.1,166.67A167.85,167.85,0,0,1,256,185Z></path><path d=M336,331.73a167.51,167.51,0,0,1-52.37,118.08A135,135,0,0,0,344,464c75,0,136-61,136-136a136,136,0,0,0-59.06-112.08A168.53,168.53,0,0,1,336,331.73Z></path><path d=M283.58,206.19a167.87,167.87,0,0,1,49.36,89.89A136.14,136.14,0,0,0,391,200.38a135.87,135.87,0,0,0-107.43,5.81Z></path><path d=M176.05,331.73a168.53,168.53,0,0,1-85-115.81A136,136,0,0,0,32,328c0,75,61,136,136,136a135,135,0,0,0,60.42-14.19A167.51,167.51,0,0,1,176.05,331.73Z></path><path d=M179.06,296.08a167.87,167.87,0,0,1,49.36-89.89A135.87,135.87,0,0,0,121,200.38,136.14,136.14,0,0,0,179.06,296.08Z></path><path d=M302.9,345.33a168.22,168.22,0,0,1-93.8,0A135.9,135.9,0,0,0,256,431.6,135.9,135.9,0,0,0,302.9,345.33Z></path><path d=M209,311.62a136,136,0,0,0,94,0,135.93,135.93,0,0,0-47-87.22A135.93,135.93,0,0,0,209,311.62Z>`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: ionicons | License: MIT (<https://github.com/ionic-team/ionicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js';
export function IonColorFilterSharp(props) {
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