import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<path d=\"M8 3C4.13401 3 1 6.13401 1 10C1 13.866 4.13401 17 8 17H9.07089C9.02417 16.6734 9 16.3395 9 16C9 15.6605 9.02417 15.3266 9.07089 15H8C5.23858 15 3 12.7614 3 10C3 7.23858 5.23858 5 8 5H16C18.7614 5 21 7.23858 21 10C21 10.3428 20.9655 10.6775 20.8998 11.0008C21.4853 11.5748 21.9704 12.2508 22.3264 13C22.7583 12.0907 23 11.0736 23 10C23 6.13401 19.866 3 16 3H8ZM11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 17.0191 20.6951 17.967 20.1716 18.7574L22.7071 21.2929L21.2929 22.7071L18.7574 20.1716C17.967 20.6951 17.0191 21 16 21C13.2386 21 11 18.7614 11 16Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: remix | License: Apache-2.0 (<https://github.com/Remix-Design/RemixIcon/blob/master/LICENSE>)
import { mergeProps } from 'solid-js';
export function RemixSeoFill(props) {
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
  return _$ssrElement("svg", _$mergeProps(merged, {
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
  }), () => _$ssr(_tmpl$), true);
}